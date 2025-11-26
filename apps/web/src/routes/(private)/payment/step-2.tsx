import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/store/hooks';
import { formatPrice } from '@/utils/price';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment/step-2')({
  component: RouteComponent,
});

function RouteComponent() {
  const { total } = useAppSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="grid grid-cols-[auto_350px] gap-12">
        {/** SELECT METHOD */}
        <section className="flex flex-col gap-4">
          <h2>escolha o seu metodo de envio</h2>
          <ul className="flex flex-col gap-4">
            {PAYMENT_METHODS.map(method => (
              <li key={method.id} className="border border-border h-20 flex justify-between items-center px-4">
                <div className="flex items-center gap-2 uppercase">
                  <Input type="checkbox" />
                  <p>{method.label}</p>
                </div>

                <img src={method.image} alt={method.label} className="size-12 object-contain" />
              </li>
            ))}
          </ul>
        </section>

        {/** RESUME */}
        <section className="flex flex-col gap-4 uppercase">
          <h3 className="font-bold">resumo</h3>
          <div className="flex items-center justify-between w-full">
            <p className="text-zinc-400">total</p>
            <p>{formatPrice(total)}</p>
          </div>

          <hr className="w-full h-px" />

          <div className="flex text-zinc-400 items-center justify-between">
            <p>detalhes de envio</p>
            <p>editar</p>
          </div>
          <p>gerson fuca, cruzeiro, rua do timor, luanda</p>

          <Button onClick={() => navigate({ to: '/payment/step-3' })} className="uppercase">
            continuar
          </Button>
        </section>
      </div>
    </div>
  );
}

const PAYMENT_METHODS = [
  {
    id: 1,
    label: 'multicaixa express',
    image: '/images/express.png',
  },
  {
    id: 2,
    label: 'visa',
    image: '/images/visa.png',
  },
  {
    id: 3,
    label: 'mastercard',
    image: '/images/mastercard.png',
  },
  {
    id: 4,
    label: 'paypal',
    image: '/images/paypal.png',
  },
];
