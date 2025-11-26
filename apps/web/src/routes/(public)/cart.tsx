import { useAppSelector } from '@/store/hooks';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import CartItem from '@/features/cart/components/cart-item';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/utils/price';
import { SUITS_DATA } from '@/db';
import SuitCard from '@/components/suit-card';

export const Route = createFileRoute('/(public)/cart')({
  component: CartPage,
});

function CartPage() {
  const { items, total } = useAppSelector(state => state.cart);
  const navigate = useNavigate();

  const SUB_TOTAL = total;
  const IVA = total * 0.16;
  const TOTAL = SUB_TOTAL + IVA;

  return (
    <div className="page-container grid grid-cols-1 gap-20">
      <section className="grid grid-cols-1 lg:grid-cols-[auto_537px] gap-6">
        <div className="border flex flex-col p-4 gap-6">
          <h3 className="uppercase font-semibold">seu carrinho</h3>
          {items.map(item => (
            <CartItem item={item} />
          ))}
        </div>

        <div className="w-full flex flex-col gap-6">
          <h2 className="uppercase font-medium">Resumo</h2>
          <div className="flex flex-col gap-2">
            <span className="uppercase text-zinc-400">código</span>
            <div className="flex items-center gap-4">
              <Input placeholder="CUPOM DE DESCONTO" />
              <Button className="uppercase">aplicar</Button>
            </div>
          </div>

          <div className="w-[340px]  flex flex-col">
            <div className="grid grid-cols-2 py-2">
              <p className="uppercase text-zinc-400">subtotal</p>
              <p className="font-medium">{formatPrice(SUB_TOTAL)}</p>
            </div>
            <div className="grid grid-cols-2 py-2">
              <p className="uppercase text-zinc-400">IVA</p>
              <p className="font-medium">{formatPrice(IVA)}</p>
            </div>
            <hr className="w-full" />
            <div className="grid grid-cols-2 py-2">
              <p className="uppercase text-zinc-400">total</p>
              <p className="font-medium">{formatPrice(TOTAL)}</p>
            </div>
          </div>

          <Button onClick={() => navigate({ to: '/payment/step-initial' })} className="w-full uppercase">
            finalizar compra
          </Button>
        </div>
      </section>
      {/** SEE MORE */}
      <section className="w-full flex flex-col gap-10">
        <h3 className="uppercase font-semibold text-2xl">também pode lhe interessar</h3>
        <div className="grid grid-cols-4 gap-4">
          {SUITS_DATA.map(suit => (
            <SuitCard suit={suit} />
          ))}
        </div>
      </section>
    </div>
  );
}
