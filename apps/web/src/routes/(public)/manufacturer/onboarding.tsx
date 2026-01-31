import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/manufacturer/onboarding')({
  component: RouteComponent,
});

const advantages = ['Gestão fácil dos seus produtos', 'Vendas 100% online', 'Pagamentos seguros', 'Suporte dedicado'];

function RouteComponent() {
  return (
    <div className='flex flex-col justify-center gap-6 lg:gap-0 lg:justify-around h-screen'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl md:text-5xl font-bold'>
          Venda as suas
          <br className='hidden md:block' /> criações na maior <br className='hidden md:block' />
          vitrine de moda sob
          <br className='hidden md:block' /> medida de Angola.
        </h1>
        <p>Conheça algumas das vantagens da nossa plataforma.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
          {advantages.map((adv, index) => (
            <span key={index} className='text-center px-6 w-full py-2 border border-border capitalize'>
              {adv}
            </span>
          ))}
        </div>
      </div>

      <Link to='/manufacturer/register'>
        <Button className='w-full lg:w-50'>Continuar</Button>
      </Link>
    </div>
  );
}
