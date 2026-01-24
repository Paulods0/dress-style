import SelectOption from './select-option';
import { Button } from './ui/button';

const filters = [
  { id: 1, label: 'Todos' },
  { id: 2, label: 'Ternos' },
  { id: 3, label: 'Blazers' },
  { id: 4, label: 'Camisas' },
  { id: 5, label: 'Calças' },
  { id: 6, label: 'Sapatos' },
];

export default function ManNavFilter() {
  return (
    <div>
      <div className='lg:flex hidden items-center gap-4 lg:gap-6'>
        {filters.map((filter) => (
          <Button variant={'ghost'} key={filter.id} className='uppercase'>
            {filter.label}
          </Button>
        ))}
      </div>

      <SelectOption
        onChange={() => {}}
        className='lg:hidden flex'
        placeholder='Selecinar tipo'
        items={filters.map((f) => ({ label: f.label, value: f.id.toString() }))}
      />
    </div>
  );
}
