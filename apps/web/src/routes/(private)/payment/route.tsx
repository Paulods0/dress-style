import clsx from 'clsx';
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment')({
  component: RouteComponent,
});

function RouteComponent() {
  const pathname = useLocation().pathname;

  let currentStep = 1;
  if (pathname.endsWith('step-2')) {
    currentStep = 2;
  } else if (pathname.endsWith('step-3')) {
    currentStep = 3;
  }

  return (
    <div className='page-container flex items-center w-full lg:w-[890px] mx-auto justify-start flex-col gap-1 lg:gap-14'>
      <div className='flex items-end justify-between lg:gap-4 w-full px-6'>
        <StepCount step={1} label='envio' currentStep={currentStep} />
        <StepCount step={2} label='pagamento' currentStep={currentStep} />
        <StepCount step={3} label='confirmação' currentStep={currentStep} />
      </div>
      <Outlet />
    </div>
  );
}

interface StepCountProps {
  step: number;
  label: string;
  currentStep: number;
}

const StepCount = ({ label, step, currentStep }: StepCountProps) => {
  const bgColor = step <= currentStep ? 'bg-black' : 'bg-zinc-100 text-zinc-600';
  const isLast = step === 3;

  return (
    <div className='flex lg:flex-row flex-col items-center gap-2 uppercase'>
      <span className={clsx(`rounded-full h-10 w-10 flex items-center justify-center text-white`, bgColor)}>
        {step}
      </span>
      <span className='hidden lg:block'>{label}</span>
      {!isLast && <div className='h-px lg:w-[268px] bg-black' />}
    </div>
  );
};
