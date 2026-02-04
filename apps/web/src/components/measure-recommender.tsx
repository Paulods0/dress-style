import { X } from 'lucide-react';
import { Button } from './ui/button';
import MeasurementSelector from './measurement-selector';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';

const genderOptions = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Feminino' },
];

const heightOptions = [
  { value: '154', label: "1'54cm" },
  { value: '155', label: "1'55cm" },
  { value: '156', label: "1'56cm" },
  { value: '157', label: "1'57cm" },
  { value: '158', label: "1'58cm" },
];

const weightOptions = [
  { value: '50', label: '50kg' },
  { value: '55', label: '55kg' },
  { value: '60', label: '60kg' },
  { value: '65', label: '65kg' },
  { value: '70', label: '70kg' },
];

const ageOptions = [
  { value: '18-25', label: '18-25' },
  { value: '26-35', label: '26-35' },
  { value: '36-45', label: '36-45' },
  { value: '46-55', label: '46-55' },
  { value: '56+', label: '56+' },
];

export default function MeasureRecommender() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger className='text-start uppercase hover:bg-zinc-100 cursor-pointer p-2 transition-colors duration-300 ease-in-out'>
        Recomendador de medidas
      </DrawerTrigger>
      <DrawerContent className='py-4 space-y-8 flex flex-col justify-between'>
        <div>
          <DrawerHeader>
            <div className='w-full flex items-center justify-between'>
              <DrawerTitle className='uppercase text-sm lg:text-base'>recomendador de medidas</DrawerTitle>
              <DrawerClose className='text-end hover:bg-zinc-100 ease-in-out duration-200 p-2 cursor-pointer'>
                <X size={14} />
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className='px-4 overflow-y-scroll flex flex-col gap-2 h-[750px]'>
            <MeasurementSelector items={genderOptions} title='gênero' />
            <MeasurementSelector items={heightOptions} title='altura' />
            <MeasurementSelector items={weightOptions} title='peso' />
            <MeasurementSelector items={ageOptions} title='idade' />
          </div>
        </div>

        <div className='px-4 w-full'>
          <Button className='w-full uppercase'>continuar</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
