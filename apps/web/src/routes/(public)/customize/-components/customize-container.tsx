import { ArrowLeft } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import type { FileRouteTypes } from '@/routeTree.gen';

type Props = {
  title: string;
  backTo: FileRouteTypes['to'];
  children: React.ReactNode;
};

export default function CustomizeContainer({ title, backTo, children }: Props) {
  return (
    <div className='w-full lg:w-[1130px] h-fit lg:h-[553px] shadow-lg border p-10 flex flex-col items-center justify-between gap-10'>
      <div className='w-full flex items-center justify-between'>
        <Link to={backTo} className='hover:bg-zinc-200 duration-100 ease-in-out p-2'>
          <ArrowLeft size={14} />
        </Link>
        <h2 className='text-lg font-light uppercase'>{title}</h2>
        <div />
      </div>
      {children}
    </div>
  );
}
