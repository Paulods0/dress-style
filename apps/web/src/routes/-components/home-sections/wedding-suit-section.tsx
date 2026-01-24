import { ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

function WeddingSuitImage({ headline, image, actionLabel }: { headline: string; image: string; actionLabel: string }) {
  return (
    <div className='relative flex items-end w-full h-full'>
      <img alt={headline} src={image} className='absolute inset-0 h-full object-cover w-full' />

      <div className='z-50 flex flex-col pb-24 pl-24 gap-4 w-full'>
        <h3 className='font-semibold text-2xl lg:text-3xl text-white w-[339px] uppercase relative top-18 right-20 lg:right-0 lg:top-0'>
          {headline}
        </h3>

        <Link to='/' className='relative top-20 right-20 lg:right-0 lg:top-0'>
          <Button variant={'outline'} className='uppercase'>
            {actionLabel}
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function WeddingSuitSection() {
  return (
    <section className='grid md:grid-cols-2 grid-cols-1 gap-4 min-h-[750px]'>
      <WeddingSuitImage headline='coleção de casamento' image='/images/wedding-suit.webp' actionLabel='comprar agora' />
      <WeddingSuitImage
        image='/images/pink-suit.webp'
        actionLabel='personalizar agora'
        headline='personalize o terno ideal para si'
      />
    </section>
  );
}
