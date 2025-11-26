import { formatPrice } from '@/utils/price';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { decreaseQuantity, increaseQuantity, removeItem, type CartItem } from '@/store/cart-slice';

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
    <section className="grid grid-cols-[auto_196.5px_196.5px] py-3 gap-16 border-t">
      {/** PRODUCTS */}
      <div className="flex flex-col w-full h-full">
        <h3 className="uppercase text-zinc-300">produto</h3>
        <div className="flex h-full w-[115px] gap-8 p-2">
          <img src={image} className="h-[133px] w-full object-cover" alt="" />
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">{title}</h3>
            <div className="flex items-center gap-4">
              <p className="uppercase flex items-center gap-2 border-r pr-4">
                tamanho <span>34</span>
              </p>
              <p className="uppercase flex items-center gap-2">
                cor <div className="size-4 bg-black" />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** QTD */}
      <div className="flex flex-col gap-[34px] w-full">
        <h3 className="uppercase text-zinc-300">quantidade</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center border gap-2 w-fit">
            <Button variant={'ghost'} onClick={handleIncrease}>
              <Plus />
            </Button>

            <span>{item.quantity}</span>

            <Button variant={'ghost'} onClick={handleDecrease}>
              <Minus />
            </Button>
          </div>
          <Button variant={'ghost'} onClick={handleClear} className="outline-none border-none ring-0">
            <Trash2 className="text-zinc-400" />
          </Button>
        </div>
      </div>
      {/** TOTAL */}
      <div className="flex flex-col w-full">
        <h3 className="uppercase text-zinc-300">total</h3>
        <div className=" w-full p-2">{formatPrice(item.price * item.quantity)}</div>
      </div>
    </section>
  );
}
