import { Button } from '@/components/ui/button';
import CatalogHero from '@/components/catalog-hero';
import SuitsListing from '@/components/suits-listing';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/catalog/')({
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <div className='flex flex-col gap-6'>
      <CatalogHero />
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Button variant={'link'} className='capitalize'>
            produtos
          </Button>
          <Button variant={'link'} className='capitalize'>
            avaliações
          </Button>
        </div>

        <Button variant={'link'}>Filtros</Button>
      </div>
      <SuitsListing />
    </div>
  );
}
