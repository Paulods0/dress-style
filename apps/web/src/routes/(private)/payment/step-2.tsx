import { formatPrice } from '@/utils/price';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/store/hooks';
import type { PaymentMethod } from '@/store/payment-slice';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment/step-2')({
  component: RouteComponent,
});

type PaymentMethodProps = {
  id: number;
  value: PaymentMethod['name'];
  label: string;
  image: string;
};

const paymentMethods: PaymentMethodProps[] = [
  { id: 1, value: 'express', label: 'multicaixa express', image: '/images/express.png' },
  { id: 2, value: 'visa', label: 'visa', image: '/images/visa.png' },
  { id: 3, value: 'mastercard', label: 'mastercard', image: '/images/mastercard.png' },
  { id: 4, value: 'paypal', label: 'paypal', image: '/images/paypal.png' },
];

function RouteComponent() {
  return (
    <div className='page-container'>
      <div className='grid grid-cols-1 lg:grid-cols-[auto_350px] gap-4 lg:gap-12'>
        <div className='flex flex-col gap-4'>
          <h2>Escolha o seu metodo de envio</h2>
          <ul className='flex flex-col gap-4'>
            {paymentMethods.map((method) => (
              <li key={method.id} className='border border-border h-20 flex justify-between items-center px-4'>
                <div className='flex items-center gap-2 uppercase'>
                  <Input type='radio' name='option' onChange={(e) => console.log(e.target.value)} />
                  <p>{method.label}</p>
                </div>
                <img src={method.image} alt={method.label} className='size-12 object-contain' />
              </li>
            ))}
          </ul>
        </div>
        <Resume />
      </div>
    </div>
  );
}

const Resume = () => {
  const navigate = useNavigate();
  const { total } = useAppSelector((state) => state.cart);
  const { userInfo } = useAppSelector((state) => state.payment);

  const name = `${userInfo?.firstName} ${userInfo?.lastName}`;
  const district = userInfo?.address.district;
  const city = userInfo?.address.city;

  return (
    <section className='flex flex-col gap-4 uppercase'>
      <h3 className='font-bold'>resumo</h3>
      <div className='flex items-center justify-between w-full'>
        <p className='text-zinc-400'>total</p>
        <p>{formatPrice(total)}</p>
      </div>

      <hr className='w-full h-px' />

      <div className='flex text-zinc-400 items-center justify-between'>
        <p>detalhes de envio</p>
        <Link to='/payment/step-1'>editar</Link>
      </div>

      <p className='capitalize'>
        {name}, {district}, {city}
      </p>

      <Button onClick={() => navigate({ to: '/payment/step-3' })} className='uppercase'>
        continuar
      </Button>
    </section>
  );
};
