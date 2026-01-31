import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/customize')({
  component: CustomizeLayout,
});

function CustomizeLayout() {
  return (
    <div className='h-screen flex flex-col items-center gap-10 justify-center'>
      <h1 className='text-lg uppercase'>personalize o seu terno</h1>
      <Outlet />
    </div>
  );
}
