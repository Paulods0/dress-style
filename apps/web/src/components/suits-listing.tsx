import { SUITS_DATA } from '@/db';
import SuitCard from './suit-card';

type Props = {};

export default function SuitsListing({}: Props) {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {SUITS_DATA.map((suit) => (
        <SuitCard key={suit.id} suit={suit} />
      ))}
    </div>
  );
}
