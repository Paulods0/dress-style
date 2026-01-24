import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment/step-initial')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [selected, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-6 w-[460px] items-center'>
      <h1 className='uppercase'>escolha o seu método de envio</h1>
      <DeliveryMethod handleSelect={handleSelect} isFree label='recolha na loja' selected={selected} />
      <DeliveryMethod handleSelect={handleSelect} label='home delivery' selected={!selected} />
      <Button onClick={() => navigate({ to: '/payment/step-1' })} className='w-full uppercase'>
        continuar
      </Button>
    </div>
  );
}

type DeliveryMethodProps = {
  label: string;
  isFree?: boolean;
  handleSelect: () => void;
  selected: boolean;
};

const DeliveryMethod = ({ label, isFree = false, handleSelect, selected }: DeliveryMethodProps) => {
  return (
    <div
      onClick={handleSelect}
      className={clsx(
        'h-20 border-border cursor-pointer hover:border-neutral-700 transition-colors ease-in-out duration-200 border flex px-4 w-full items-center justify-between uppercase',
        {
          'border-black border-2 outline-2 outline-black': selected,
        }
      )}>
      <p>{label}</p>
      {isFree && <p>grátis</p>}
    </div>
  );
};
