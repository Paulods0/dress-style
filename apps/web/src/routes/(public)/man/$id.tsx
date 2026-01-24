import { SUITS_DATA } from '@/db';
import ManDetails from '@/components/man-details';
import { createFileRoute } from '@tanstack/react-router';
import ManMoreOptions from '@/components/man-more-options';

export const Route = createFileRoute('/(public)/man/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  const currentItem = SUITS_DATA.find((suit) => suit.id.toString() === id);

  return (
    <div className='page-container grid grid-cols-1 gap-20'>
      <ManDetails id={id} currentItem={currentItem} />
      <ManMoreOptions />
    </div>
  );
}
``;
