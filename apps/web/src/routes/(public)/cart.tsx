import { useAppSelector } from '@/store/hooks';
import { createFileRoute } from '@tanstack/react-router';
import CartItem from '@/features/cart/components/cart-item';
import { SUITS_DATA } from '@/db';
import SuitCard from '@/components/suit-card';
import CartResume from '@/components/cart/cart-resume';

export const Route = createFileRoute('/(public)/cart')({
  component: CartPage,
});

function CartPage() {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className='page-container grid grid-cols-1 gap-20'>
      <section className='grid grid-cols-1 lg:grid-cols-[auto_537px] gap-6'>
        <div className='border flex flex-col p-4 gap-6'>
          <h3 className='uppercase font-semibold'>seu carrinho</h3>
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <CartResume />
      </section>

      {/** SEE MORE */}
      <section className='w-full flex flex-col gap-10'>
        <h3 className='uppercase font-semibold text-2xl'>também pode lhe interessar</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {SUITS_DATA.map((suit) => (
            <SuitCard suit={suit} />
          ))}
        </div>
      </section>
    </div>
  );
}
