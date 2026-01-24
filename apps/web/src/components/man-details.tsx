import { Button } from './ui/button';
import SelectSize from './select-size';
import { Bookmark } from 'lucide-react';
import { formatPrice } from '@/utils/price';
import { SUITS_DATA, type Suit } from '@/db';
import { addItem } from '@/store/cart-slice';
import { useAppDispatch } from '@/store/hooks';
import CollapsibleColor from './collapsible-color';

type Props = {
  id: string;
  currentItem?: Suit;
};

export default function ManDetails({ id, currentItem }: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item = SUITS_DATA.find((item) => item.id.toString() === id);

    if (item) {
      dispatch(addItem({ ...item, id, quantity: 1 }));
    }
  };

  return (
    <div className='min-h-[816px] lg:h-[816px] grid grid-cols-1 lg:grid-cols-[100px_668px_auto] gap-4'>
      <ul className='flex flex-row lg:flex-col gap-5'>
        {Array.from({ length: 3 }).map((_, index) => {
          const img = `/images/card-suit-${id}.webp`;
          return (
            <li key={index} className='relative size-[90px]'>
              <img src={img} alt='suit-card-image' className='absolute object-cover inset-0 w-full h-full' />
            </li>
          );
        })}
      </ul>

      <div className='relative w-full h-full'>
        <img alt={`suit-${id}`} src={currentItem?.image} className='lg:absolute inset-0 object-cover h-full w-full' />
      </div>

      <div className='flex flex-col gap-6 w-full h-full p-2'>
        <div className='flex items-center gap-4'>
          <img src='/svg/dress-style.png' className='size-12' alt='' />
          <p className='capitalize'>dress style</p>
        </div>

        <div className='flex w-full justify-between items-center'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>{currentItem?.title}</h2>
            <span>{formatPrice(currentItem?.price || 0)}</span>
          </div>
          <Bookmark size={18} />
        </div>

        <p>
          The Alexandre bottle green twill suit in tailored fit is crafted from 100% wool in the renowned Italian mill,
          Zignone. Luxurious Super 100s
        </p>

        <SelectSize />

        <div className='flex flex-col gap-4'>
          <h3 className='uppercase '>cor</h3>
          <div className='flex items-center gap-6'>
            <CollapsibleColor className='bg-[#559DCD]' />
            <CollapsibleColor className='bg-black' />
            <CollapsibleColor className='bg-[#ADA388]' />
            <CollapsibleColor className='bg-[#429458]' />
          </div>
        </div>

        <div className='flex flex-col lg:self-start items-center justify-center gap-4'>
          <div className='flex flex-col lg:flex-row items-center w-full lg:w-[560px] gap-4'>
            <Button onClick={handleAddToCart} className='uppercase w-full lg:w-auto flex-1'>
              adicionar ao carrinho
            </Button>

            <Button variant={'outline'} className='uppercase w-full lg:w-auto flex-1'>
              personalizar
            </Button>
          </div>

          <Button variant={'link'} className='uppercase '>
            realizar marcação
          </Button>
        </div>
      </div>
    </div>
  );
}
