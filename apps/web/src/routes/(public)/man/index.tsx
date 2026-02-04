import ManNavFilter from '@/components/man-filter';
import { createFileRoute } from '@tanstack/react-router';
import ManDrawerFilter from '@/components/man-drawer-filter';
import SuitsListing from '@/components/suits-listing';

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
      <SuitsListing />
    </div>
  );
}
