import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function HeroSection() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className='relative w-full h-[35vh] lg:h-[calc(90vh-75px)]'>
          <img
            alt='hero-banner-1'
            src='/images/hero-banner.webp'
            className='absolute inset-0 w-full h-full object-cover'
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
