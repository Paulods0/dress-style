import clsx from 'clsx';
import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import MeasureRecommender from './measure-recommender';

const collapsibleOptions = [
  { id: 1, label: '46' },
  { id: 2, label: '48' },
  { id: 3, label: '50' },
  { id: 4, label: '52' },
  { id: 5, label: '54' },
  { id: 6, label: '56' },
];

export default function SelectSize() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex flex-col gap-4 w-full '>
      <h3 className='uppercase'>tamanho</h3>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className=' mb-4' asChild>
          <Button variant={'outline'} className='uppercase flex items-center gap-4'>
            escolher tamanho
            <ChevronDown className={clsx({ 'transition-transform duration-200 ease-in-out rotate-180': open })} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className='flex flex-col border w-full p-4'>
          <MeasureRecommender />
          {collapsibleOptions.map((option) => (
            <div
              key={option.id}
              className='uppercase hover:bg-zinc-100 cursor-pointer p-2 transition-colors duration-300 ease-in-out'>
              {option.label}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
