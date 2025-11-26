import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import clsx from 'clsx';

export const Route = createFileRoute('/(private)/payment')({
  component: RouteComponent,
});

function RouteComponent() {
  const pathname = useLocation().pathname;

  let currentStep = 1;
  if (pathname.endsWith('step-2')) currentStep = 2;
  else if (pathname.endsWith('step-3')) currentStep = 3;

  return (
    <div className="page-container flex items-center w-full justify-center flex-col gap-14">
      <div className="h-screen flex flex-col gap-20 items-center">
        <div className="mx-auto flex items-center gap-4">
          <StepCount step={1} label="envio" currentStep={currentStep} />
          <div className="h-px w-[268px] bg-black" />
          <StepCount step={2} label="pagamento" currentStep={currentStep} />
          <div className="h-px w-[268px] bg-black" />
          <StepCount step={3} label="confirmação" currentStep={currentStep} />
        </div>
        <Outlet />
      </div>
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

  return (
    <div className="flex items-center gap-2 uppercase">
      <span className={clsx(`rounded-full h-10 w-10 flex items-center justify-center text-white`, bgColor)}>
        {step}
      </span>
      <span>{label}</span>
    </div>
  );
};
