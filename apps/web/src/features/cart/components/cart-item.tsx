import { formatPrice } from '@/utils/price';
import { useAppDispatch } from '@/store/hooks';
import CartProduct from '@/components/cart/cart-product';
import { decreaseQuantity, increaseQuantity, removeItem, type CartItem } from '@/store/cart-slice';
import CartQuantityControl from '@/components/cart/cart-quantity-control';

type Props = {
  item: CartItem;
};

export default function CartItem({ item }: Props) {
  const dispatch = useAppDispatch();

  const { id, image, title } = item;

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleClear = () => {
    dispatch(removeItem(id));
  };

  return (
    <section className='grid grid-cols-1 lg:grid-cols-[auto_196.5px_196.5px] py-3 gap-10 lg:gap-16 border-t'>
      <CartProduct title={title} image={image} />
      <CartQuantityControl
        quantity={item.quantity}
        handleClear={handleClear}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <div className='flex flex-col w-full'>
        <h3 className='uppercase text-zinc-300'>total</h3>
        <div className=' w-full p-2'>{formatPrice(item.price * item.quantity)}</div>
      </div>
    </section>
  );
}
