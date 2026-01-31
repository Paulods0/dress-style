import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeContainer from './-components/customize-container';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/customize/step-3')({
  component: RouteComponent,
});

const colorList = [
  {
    id: 1,
    label: 'verde',
    color: 'bg-green-900',
  },
  {
    id: 2,
    label: 'azul',
    color: 'bg-blue-900',
  },
  {
    id: 3,
    label: 'marrom',
    color: 'bg-amber-900',
  },
];

function RouteComponent() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <CustomizeContainer title='cor' backTo='/customize/step-2'>
      <div className='flex items-center flex-wrap justify-center w-full gap-6'>
        {colorList.map((color) => (
          <ColorCard
            key={color.id}
            label={color.label}
            color={color.color}
            isSelected={color.id === selected}
            onSelect={() => setSelected(color.id)}
          />
        ))}
      </div>
      <Button disabled={!selected} className='uppercase w-[220px]'>
        <Link to='/customize/step-4'>continuar</Link>
      </Button>
    </CustomizeContainer>
  );
}

type ColorCardProps = {
  label: string;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
};

const ColorCard = ({ label, color, isSelected, onSelect }: ColorCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={cn('border cursor-pointer hover:border-black/50 p-2 w-[170px] flex items-center justify-between', {
        'border-black border-2': isSelected,
      })}>
      <div className={cn('size-6', color)} />
      <span className='uppercase'>{label}</span>
    </div>
  );
};
