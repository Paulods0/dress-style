import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

export default function StartSellingSection() {
  const navigate = useNavigate();

  return (
    <div className='relative flex items-center justify-end w-full h-[266px] p-20'>
      <img src='/images/start-selling.webp' alt='start-selling' className='absolute inset-0 w-full h-full' />

      <div className='flex z-10 flex-col gap-4 w-[465px] mr-20'>
        <p className='text-white text-sm'>
          Tem uma MARCA ou FÁBRICA DE ROUPAS sociais? Junte-se à Dress Style e coloque as suas peças em frente de
          milhares de clientes à procura de elegância e sofisticação.
        </p>
        <Button
          variant={'secondary'}
          className='uppercase w-fit'
          onClick={() => navigate({ to: '/manufacturer/onboarding' })}>
          comece a vender agora <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
