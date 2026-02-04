import { Button } from './ui/button';
import dayjs from 'dayjs';
import { PurchaseHistoryDataRow } from './purchase-history-data-row';
import { formatPrice } from '@/utils/price';

type Props = {};

const recentOrders = [
  {
    id: 1,
    name: 'terno executivo azul marinho',
    size: '42',
    quantity: 1,
    price: 200000,
    date: dayjs('15/05/2025').format('DD/MM/YYYY'),
  },
  {
    id: 2,
    name: 'terno executivo azul marinho',
    size: '42',
    quantity: 1,
    price: 250000,
    date: dayjs('15/05/2025').format('DD/MM/YYYY'),
  },
];

export function RecentOrders({}: Props) {
  const totalAmount = recentOrders.reduce((acc, items) => acc + items.price, 0);

  return (
    <ul className='flex flex-col w-full border border-zinc-400'>
      <li className='bg-zinc-100 px-4 h-[56px] flex items-center w-full justify-between'>
        <div className='flex flex-col gap-1'>
          <span className='uppercase font-medium'>ped-001</span>
          <span className='text-sm text-zinc-400'>15/05/2025</span>
        </div>

        <div className='flex items-center gap-1'>
          <p className='rounded-full px-3 py-1 text-sm w-fit bg-yellow-200 text-yellow-600 uppercase'>em produção</p>
          <Button className='uppercase' variant={'link'}>
            ver detalhes
          </Button>
        </div>
      </li>
      {recentOrders.map((order) => (
        <PurchaseHistoryDataRow key={order.id} {...order} />
      ))}

      <li className='w-full px-4 py-2 h-[56px] flex items-center justify-between border-t border-t-zinc-400'>
        <span className='uppercase text-zinc-400'>total do pedido</span>
        <span>{formatPrice(totalAmount)}</span>
      </li>
    </ul>
  );
}
