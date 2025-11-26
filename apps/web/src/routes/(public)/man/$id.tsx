import { SUITS_DATA } from '@/db';
import { Bookmark, ChevronDown } from 'lucide-react';
import SuitCard from '@/components/suit-card';
import { createFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/cart-slice';
import { formatPrice } from '@/utils/price';

export const Route = createFileRoute('/(public)/man/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const item = SUITS_DATA.find(item => item.id.toString() === id);

    if (item) {
      dispatch(addItem({ ...item, id, quantity: 1 }));
    }
  };

  const currentItem = SUITS_DATA.find(suit => suit.id.toString() === id);

  return (
    <div className="page-container grid grid-cols-1 gap-20">
      {/** =========== DETAILS TOP SECTION =========== */}
      <div className="h-[816px] grid grid-cols-[100px_668px_auto] gap-4">
        <ul className="flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, index) => {
            const img = `/images/card-suit-${id}.webp`;
            return (
              <li key={index} className="relative size-[90px]">
                <img src={img} alt="suit-card-image" className="absolute object-cover inset-0 w-full h-full" />
              </li>
            );
          })}
        </ul>

        <div className="relative w-full h-full">
          <img alt={`suit-${id}`} src={currentItem?.image} className="absolute inset-0 object-cover h-full w-full" />
        </div>

        <div className="flex flex-col gap-6 w-full h-full p-2">
          <div className="flex items-center gap-4">
            <img src="/svg/dress-style.png" className="size-12" alt="" />
            <p className="capitalize">dress style</p>
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-2xl">{currentItem?.title}</h2>
              <span>{formatPrice(currentItem?.price || 0)}</span>
            </div>
            <Bookmark size={18} />
          </div>

          <p>
            The Alexandre bottle green twill suit in tailored fit is crafted from 100% wool in the renowned Italian
            mill, Zignone. Luxurious Super 100s
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase">tamanho</h3>
            <SelectSize />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="uppercase ">cor</h3>
            <div className="flex items-center gap-6">
              <CollapsibleColor className="bg-[#559DCD]" />
              <CollapsibleColor className="bg-black" />
              <CollapsibleColor className="bg-[#ADA388]" />
              <CollapsibleColor className="bg-[#429458]" />
            </div>
          </div>

          <div className="flex flex-col self-start items-center justify-center gap-4">
            <div className="flex items-center w-[560px] gap-4">
              <Button onClick={handleAddToCart} className="uppercase flex-1">
                adicionar ao carrinho
              </Button>
              <Button variant={'outline'} className="uppercase flex-1 ">
                personalizar
              </Button>
            </div>

            <Button variant={'link'} className="uppercase ">
              realizar marcação
            </Button>
          </div>
        </div>
      </div>

      {/** =========== MORE OPTIONS =========== */}
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="uppercase text-2xl font-bold">também pode lhe interessar</h2>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {SUITS_DATA.map(suit => (
            <SuitCard key={suit.id} suit={suit} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CollapsibleOptions = [
  { id: 1, label: 'recomendador de medidas', value: 'recommend' },
  { id: 2, label: '32', value: '32' },
  { id: 3, label: '38', value: '38' },
  { id: 4, label: '40', value: '40' },
  { id: 5, label: '44', value: '44' },
];

const CollapsibleColor = ({ className }: { className: string }) => {
  const [Collapsible, setCollapsible] = React.useState(false);

  return (
    <div
      onClick={() => setCollapsible(prev => !prev)}
      className={clsx('size-6 cursor-pointer', className, {
        'border-2 border-black shadow-[0_0_0_2px_white]': Collapsible,
      })}
    />
  );
};

const SelectSize = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className=" mb-4" asChild>
        <Button variant={'outline'} className="uppercase flex items-center gap-4">
          escolher tamanho
          <ChevronDown className={clsx({ 'transition-transform duration-200 ease-in-out rotate-180': open })} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col border w-fit p-4">
        {CollapsibleOptions.map(option => (
          <div
            key={option.id}
            className="uppercase hover:bg-zinc-100 cursor-pointer p-2 transition-colors duration-300 ease-in-out"
          >
            {option.label}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
