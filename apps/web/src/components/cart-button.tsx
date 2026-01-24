import type { CartItem } from '@/store/cart-slice';
import { Link } from '@tanstack/react-router';
import { SlBag } from 'react-icons/sl';

type Props = {
  items: CartItem[];
};

export default function CartButton({ items }: Props) {
  return (
    <Link to='/cart' className='flex items-center gap-2'>
      <SlBag size={20} strokeWidth={1} />
      <p className='flex items-center gap-2'>
        <span className='hidden lg:block'>Carrinho</span>

        {items.length > 0 && (
          <span className='rounded-full text-white bg-neutral-800 size-6 flex items-center justify-center'>
            {items.length}
          </span>
        )}
      </p>
    </Link>
  );
}
