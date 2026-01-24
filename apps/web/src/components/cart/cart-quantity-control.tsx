import { Button } from '../ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

type CartQuantityControlProps = {
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleClear: () => void;
  quantity: number;
};

export default function CartQuantityControl({
  handleClear,
  handleIncrease,
  handleDecrease,
  quantity,
}: CartQuantityControlProps) {
  return (
    <div className='flex flex-col gap-3 lg:gap-[34px] w-full'>
      <h3 className='uppercase text-zinc-300'>quantidade</h3>

      <div className='flex items-center gap-2 w-full'>
        <div className='flex items-center border gap-2 w-full lg:w-fit'>
          <Button variant={'ghost'} onClick={handleIncrease} className='flex-1'>
            <Plus />
          </Button>
          <span>{quantity}</span>
          <Button variant={'ghost'} onClick={handleDecrease} className='flex-1'>
            <Minus />
          </Button>
        </div>

        <Button variant={'ghost'} onClick={handleClear} className='outline-none border-none ring-0'>
          <Trash2 className='text-zinc-400' />
        </Button>
      </div>
    </div>
  );
}
