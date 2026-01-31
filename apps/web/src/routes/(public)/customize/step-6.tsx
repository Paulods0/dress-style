import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeContainer from './-components/customize-container';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/(public)/customize/step-6')({
  component: RouteComponent,
});

const absTypes = [
  { id: 1, image: '/images/abs-1.png', label: 'raso', value: 'raso' },
  { id: 2, image: '/images/abs-2.png', label: 'médio', value: 'médio' },
  { id: 3, image: '/images/abs-1.png', label: 'volumoso', value: 'volumoso' },
];

function RouteComponent() {
  const [selectedAbs, setSelectedAbs] = useState<number | null>(null);

  return (
    <CustomizeContainer title='abdómen' backTo='/customize/step-5'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex items-center w-full gap-10 justify-between'>
          {absTypes.map((abs) => (
            <AbsType
              {...abs}
              key={abs.value}
              selected={selectedAbs === abs.id}
              onSelect={() => setSelectedAbs(abs.id)}
            />
          ))}
        </div>
      </div>

      <Button disabled={!selectedAbs} className='w-[220px] uppercase'>
        <Link className='w-full h-full' to='/customize/step-7'>
          Continuar
        </Link>
      </Button>
    </CustomizeContainer>
  );
}

type AbsTypeProps = {
  image: string;
  label: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
};

const AbsType = ({ image, label, selected, onSelect }: AbsTypeProps) => {
  return (
    <div
      onClick={onSelect}
      className={cn('flex cursor-pointer group flex-col items-center gap-4', selected && 'shadow-md')}>
      <img src={image} alt={label} className='size-[200px] object-cover' />
      <span className='uppercase group-hover:underline'>{label}</span>
    </div>
  );
};
