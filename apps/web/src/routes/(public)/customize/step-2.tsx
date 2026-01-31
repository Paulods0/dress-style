import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import CustomizeContainer from './-components/customize-container';

export const Route = createFileRoute('/(public)/customize/step-2')({
  component: CustomizeStep2Page,
});

const tissueList = [
  {
    id: 1,
    label: 'Lã',
    image: '/images/tissue-1.png',
  },
  {
    id: 2,
    label: 'Linho',
    image: '/images/tissue-2.png',
  },
  {
    id: 3,
    label: 'Algodão',
    image: '/images/tissue-3.png',
  },
];

function CustomizeStep2Page() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <CustomizeContainer title='tecido' backTo='/customize/step-1'>
      <div className='flex flex-wrap items-center gap-10 justify-center '>
        {tissueList.map((tissue) => (
          <TissueCard
            key={tissue.id}
            label={tissue.label}
            image={tissue.image}
            isSelected={tissue.id === selected}
            onSelect={() => setSelected(tissue.id)}
          />
        ))}
      </div>

      <Button disabled={!selected} className='w-[220px] uppercase'>
        <Link to='/customize/step-3'>continuar</Link>
      </Button>
    </CustomizeContainer>
  );
}

type TissueCardProps = {
  label: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
};

const TissueCard = ({ label, image, onSelect, isSelected }: TissueCardProps) => {
  return (
    <div
      role='button'
      onClick={onSelect}
      className={cn(
        'size-[176px] rounded border flex flex-col justify-center items-center gap-3 cursor-pointer transition',
        {
          'border-black ring-1 ring-black': isSelected,
          'border-zinc-300 hover:border-zinc-500': !isSelected,
        }
      )}>
      <img src={image} alt={label} className='size-20 object-cover' />
      <p className='uppercase'>{label}</p>
    </div>
  );
};
