import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeSuiteForm from '@/components/customize-suite-form';

export const Route = createFileRoute('/(public)/customize/step-1')({
  component: CustomizeStep1Page,
});

function CustomizeStep1Page() {
  return (
    <div className='w-full lg:w-[1220px] h-full lg:h-[678px] grid grid-cols-1 lg:grid-cols-2'>
      <div className='w-full relative h-full'>
        <img src='/images/pink-suit.webp' alt='' className='absolute inset-0 w-full h-full object-cover' />
      </div>

      <div className='p-6 flex flex-col gap-8 items-center justify-center w-full border shadow'>
        <h1 className='uppercase'>Escolha um modelo do nosso catálogo</h1>
        <Link to='/' className='w-full'>
          <Button variant={'outline'} className='uppercase w-full'>
            Ver o catálogo
          </Button>
        </Link>
        <div className='flex items-center justify-center w-full h-1 gap-10'>
          <hr className='w-ful' />
          <span>ou</span>
          <hr className='w-ful' />
        </div>
        <CustomizeSuiteForm />
      </div>
    </div>
  );
}
