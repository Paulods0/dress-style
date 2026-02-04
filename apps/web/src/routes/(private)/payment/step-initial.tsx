import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DeliveryMethod } from '@/components/delivery-method';
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
    <div className='flex flex-col gap-6 w-full lg:w-[460px] items-center'>
      <h1 className='uppercase'>escolha o seu método de envio</h1>
      <DeliveryMethod handleSelect={handleSelect} isFree label='recolha na loja' selected={selected} />
      <DeliveryMethod handleSelect={handleSelect} label='home delivery' selected={!selected} />
      <Button onClick={() => navigate({ to: '/payment/step-1' })} className='w-full uppercase'>
        continuar
      </Button>
    </div>
  );
}
