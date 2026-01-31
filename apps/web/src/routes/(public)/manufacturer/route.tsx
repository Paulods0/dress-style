import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/manufacturer')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='h-screen w-full flex items-center justify-between gap-20'>
      <div className='w-full flex items-center justify-center'>
        <Outlet />
      </div>

      <div className='relative min-w-[750px] h-screen hidden lg:flex items-center justify-center'>
        <img
          src='/images/manufacturer.png'
          alt='Ilustração de onboarding'
          className='absolute w-full h-full inset-0 object-contain'
        />
      </div>
    </div>
  );
}
