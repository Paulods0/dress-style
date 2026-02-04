import { formatPrice } from '@/utils/price';

type Props = {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
};

export function PurchaseHistoryDataRow({ name, size, quantity, price }: Props) {
  return (
    <li className='bg-white flex items-center border-t border-t-zinc-400 justify-between w-full px-4 h-[56px]'>
      <div className='flex uppercase flex-col gap-1'>
        <span className='font-medium'>{name}</span>
        <span className='text-zinc-400 text-sm'>
          tamanho:{size} quantidade:{quantity}
        </span>
      </div>
      <span className='text-sm'>{formatPrice(price)}</span>
    </li>
  );
}
