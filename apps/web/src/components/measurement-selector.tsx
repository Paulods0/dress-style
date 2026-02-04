import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

type Props = {
  title: string;
  items: { label: string; value: string }[];
};

export default function MeasurementSelector({ title, items }: Props) {
  const [open, setIsOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setIsOpen} className='border'>
      <CollapsibleTrigger className='w-full'>
        <div className='border-b cursor-pointer uppercase w-full p-2 flex items-center justify-between'>
          <span>{title}</span>
          <ChevronDown
            size={14}
            className={cn('transition-transform duration-300 ease-in-out', open && 'rotate-180')}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((option) => (
          <div
            key={option.value}
            className='hover:bg-zinc-100 cursor-pointer p-2 transition-colors duration-300 ease-in-out'>
            <p>{option.label}</p>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
