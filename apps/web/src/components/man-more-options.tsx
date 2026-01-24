import { SUITS_DATA } from '@/db';
import SuitCard from './suit-card';

type Props = {};

export default function ManMoreOptions({}: Props) {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex items-center justify-between'>
        <h2 className='uppercase text-2xl font-bold'>também pode lhe interessar</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {SUITS_DATA.map((suit) => (
          <SuitCard key={suit.id} suit={suit} />
        ))}
      </div>
    </div>
  );
}
