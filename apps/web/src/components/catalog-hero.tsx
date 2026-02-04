import { Share } from 'lucide-react';
import { Button } from './ui/button';

type Props = {};

export default function CatalogHero({}: Props) {
  return (
    <div className='relative flex flex-col w-full'>
      <div className='h-[137px] w-full bg-blue-900' />
      <div className='relative left-4 lg:left-14 bottom-18 size-32 flex items-center justify-center bg-white rounded-full border-2'>
        <img src='svg/scissor-logo.svg' alt='' className='size-18' />
      </div>

      <div className='relative bottom-8 w-full flex justify-between border-b border-zinc-200 pb-4'>
        <div className='flex items-center pl-4 lg:pl-18 justify-between w-full'>
          <div className='flex flex-col items-start'>
            <h2 className='font-medium'>Dress Style</h2>
            <p>
              <span className='font-medium'>100</span> produtos disponíveis
            </p>
          </div>

          <Button variant={'link'} className='h-fit'>
            <Share size={14} />
            partilhar
          </Button>
        </div>
      </div>
    </div>
  );
}
