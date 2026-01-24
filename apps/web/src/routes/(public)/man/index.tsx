import { SUITS_DATA } from '@/db';
import SuitCard from '@/components/suit-card';
import ManNavFilter from '@/components/man-filter';
import { createFileRoute } from '@tanstack/react-router';
import ManDrawerFilter from '@/components/man-drawer-filter';

export const Route = createFileRoute('/(public)/man/')({
  component: ManPage,
});

function ManPage() {
  return (
    <div className='mt-[72px] flex flex-col gap-6'>
      <div className='w-full flex items-center justify-between'>
        <ManNavFilter />
        <ManDrawerFilter />
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {SUITS_DATA.map((suit) => (
          <SuitCard key={suit.id} suit={suit} />
        ))}
      </div>
    </div>
  );
}
