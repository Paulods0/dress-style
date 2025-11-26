import { SUITS_DATA } from '@/db';
import SuitCard from '@/components/suit-card';
import { Link } from '@tanstack/react-router';

export default function StyleTrendingSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-[24px] font-semibold">Estilos e tendências</h3>
        <Link to={'/'}>Ver mais</Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {SUITS_DATA.map(suit => (
          <SuitCard key={suit.id} suit={suit} />
        ))}
      </div>
    </section>
  );
}
