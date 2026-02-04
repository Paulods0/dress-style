import { createFileRoute, Link, Outlet, type LinkOptions } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/client-area')({
  component: ClientAreaLayout,
});

const links: { label: string; path: LinkOptions['to'] }[] = [
  {
    label: 'histórico de compras',
    path: '/client-area/purchase-history',
  },
  {
    label: 'dados de medidas',
    path: '/client-area/measurement-data',
  },
  {
    label: 'notificações e preferências',
    path: '/client-area/notifications-and-preferences',
  },
  {
    label: 'agendamentos',
    path: '/client-area/appointments',
  },
  {
    label: 'perfil',
    path: '/client-area/profile',
  },
];

function ClientAreaLayout() {
  return (
    <div className='flex flex-col py-10 gap-10'>
      <h1 className='uppercase font-medium text-xl'>área do cliente</h1>
      <div className='flex items-center gap-2 w-full '>
        {links.map((link) => (
          <Link
            to={link.path}
            activeProps={{ style: { textDecoration: 'underline', color: '#111' } }}
            className='uppercase hover:underline underline-offset-8 cursor-pointer text-zinc-400'>
            {link.label}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
