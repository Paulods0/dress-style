import { createFileRoute } from '@tanstack/react-router';
import { RecentOrders } from '@/components/recent-orders';
import { PreviousPurchases } from '@/components/previous-purchases';

export const Route = createFileRoute('/(public)/client-area/purchase-history')({
  component: PurchaseHistoryPage,
});

function PurchaseHistoryPage() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='uppercase text-xl font-medium'>Pedidos recentes</h1>
      <RecentOrders />
      <h1 className='uppercase text-xl font-medium'>Pedidos anteriores</h1>
      <PreviousPurchases />
    </div>
  );
}
