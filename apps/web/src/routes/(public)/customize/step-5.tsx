import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeContainer from './-components/customize-container';
import { Button } from '@/components/ui/button';
import SelectOption from '@/components/select-option';

export const Route = createFileRoute('/(public)/customize/step-5')({
  component: RouteComponent,
});

const measurements = [
  {
    id: 1,
    label: 'altura',
    placeholder: 'Escolher altura',
    unit: 'cm in',
    values: ['175cm', '180cm', '185cm', '190cm'],
  },
  {
    id: 2,
    label: 'peso',
    unit: 'kg lbs',
    placeholder: 'Escolher peso',
    values: ['50kg', '60kg', '70kg', '80kg'],
  },
  {
    id: 3,
    label: 'idade',
    placeholder: 'Escolher idade',
    values: ['18-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65'],
  },
];

function RouteComponent() {
  return (
    <CustomizeContainer title='medidas' backTo='/customize/step-4'>
      <ul className='w-full space-y-4'>
        {measurements.map((measurement) => {
          const items = measurement.values.map((value) => ({
            label: value,
            value: value,
          }));

          return (
            <li key={measurement.id} className='w-full flex flex-col gap-2'>
              <div className='flex items-center justify-between w-full'>
                <label className='uppercase'>{measurement.label}</label>
                {measurement.unit && <span className='uppercase text-sm'>{measurement.unit}</span>}
              </div>
              <SelectOption
                className='w-full'
                placeholder={measurement.placeholder}
                items={items}
                onChange={() => {}}
              />
            </li>
          );
        })}
      </ul>
      <Button className='w-[220px] uppercase'>
        <Link to='/customize/step-6'>Continuar</Link>
      </Button>
    </CustomizeContainer>
  );
}
