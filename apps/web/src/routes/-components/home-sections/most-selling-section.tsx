import { SUITS_DATA } from '@/db';
import { Link } from '@tanstack/react-router';
import SuitCard from '@/components/suit-card';

export default function MostSellingSection() {
  return (
    <section className='w-full flex flex-col gap-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[24px] font-semibold'>Mais vendidos</h3>
        <Link className='text-zinc-500' to='/'>
          Ver mais
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {SUITS_DATA.map((suit) => (
          <SuitCard key={suit.id} suit={suit} />
        ))}
      </div>
    </section>
  );
}
