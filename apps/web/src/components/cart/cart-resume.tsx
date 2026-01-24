import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { formatPrice } from '@/utils/price';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from '@tanstack/react-router';

type Props = {};

export default function CartResume({}: Props) {
  const navigate = useNavigate();
  const { total } = useAppSelector((state) => state.cart);

  const SUB_TOTAL = total;
  const IVA = total * 0.16;
  const TOTAL = SUB_TOTAL + IVA;

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='uppercase font-medium'>Resumo</h2>
      <div className='flex flex-col gap-2'>
        <span className='uppercase text-zinc-400'>código</span>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          <Input placeholder='CUPOM DE DESCONTO' className='w-full' />
          <Button className='uppercase w-full md:w-auto'>aplicar</Button>
        </div>
      </div>

      <div className='w-full flex flex-col'>
        <div className='flex justify-between py-2'>
          <p className='uppercase text-zinc-400'>subtotal</p>
          <p className='font-medium'>{formatPrice(SUB_TOTAL)}</p>
        </div>
        <div className='flex justify-between py-2'>
          <p className='uppercase text-zinc-400'>IVA</p>
          <p className='font-medium'>{formatPrice(IVA)}</p>
        </div>
        <hr className='w-full' />
        <div className='flex justify-between py-2'>
          <p className='uppercase text-zinc-400'>total</p>
          <p className='font-medium'>{formatPrice(TOTAL)}</p>
        </div>
      </div>

      <Button onClick={() => navigate({ to: '/payment/step-initial' })} className='w-full uppercase'>
        finalizar compra
      </Button>
    </div>
  );
}
