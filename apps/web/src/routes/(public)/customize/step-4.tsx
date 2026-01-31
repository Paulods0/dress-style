import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeContainer from './-components/customize-container';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export const Route = createFileRoute('/(public)/customize/step-4')({
  component: RouteComponent,
});

const blazerList = [
  {
    id: 1,
    label: 'tipo de ombro',
    content: [
      {
        id: 1,
        label: 'suave',
        image: '/images/shoulder-1.png',
      },
      {
        id: 2,
        label: 'amarrado',
        image: '/images/shoulder-2.png',
      },
      {
        id: 3,
        label: 'padrão',
        image: '/images/shoulder-3.png',
      },
    ],
  },
  {
    id: 2,
    label: 'lapelas',
  },
  {
    id: 3,
    label: 'bolso no peito',
  },
  {
    id: 4,
    label: 'botões',
  },
  {
    id: 5,
    label: 'bolsos',
  },
  {
    id: 6,
    label: 'aberturas',
  },
];

function RouteComponent() {
  const [open, setOpen] = useState(false);

  return (
    <CustomizeContainer title='blazer' backTo='/customize/step-3'>
      <div className='flex flex-col w-full max-h-[400px] overflow-y-auto'>
        {blazerList.map((blazer) => (
          <Collapsible open={open} onOpenChange={setOpen} key={blazer.id}>
            <CollapsibleTrigger className='border-b cursor-pointer text-lg uppercase py-2 text-start w-full'>
              <div className='flex items-center justify-between w-full '>
                <span>{blazer.label}</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            {blazer.content && (
              <CollapsibleContent className='flex flex-wrap items-center gap-6 py-4'>
                {blazer.content.map((item) => (
                  <ShoulderCard key={item.id} {...item} />
                ))}
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
      </div>

      <Button className='uppercase w-[220px]'>
        <Link to='/customize/step-5'>continuar</Link>
      </Button>
    </CustomizeContainer>
  );
}

type ShoulderCardProps = {
  label: string;
  image: string;
};

const ShoulderCard = ({ label, image }: ShoulderCardProps) => {
  return (
    <div className='flex flex-col justify-between cursor-pointer hover:shadow-md transition-all w-[105.65px] h-[134.55px]'>
      <img src={image} alt={label} className='w-full h-[99.78px] object-cover' />
      <span className='w-full text-black px-4 py-1 bg-zinc-400 text-center capitalize'>{label}</span>
    </div>
  );
};
