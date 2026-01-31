import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/manufacturer/registered')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col gap-6'>
        <div className='lg:self-start self-center'>
          <img src='/images/register-completed.png' />
        </div>

        <h3 className='text-2xl lg:text-4xl font-semibold'>
          Recebemos a sua candidatura! <br className='hidden lg:block' /> Estamos a rever os seus dados e
          <br className='hidden lg:block' /> entraremos em contacto.
        </h3>

        <p>
          Fique atento ao seu e-mail <br className='hidden lg:block' />
          Para voltar a home{' '}
          <Link
            to='/'
            className='text-zinc-600 hover:text-zinc-800 transition-all ease-in-out duration-200 hover:underline'>
            clique aqui{' '}
          </Link>
        </p>
      </div>
    </div>
  );
}
