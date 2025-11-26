import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/store/hooks';
import { formatPrice } from '@/utils/price';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment/step-1')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { items, total } = useAppSelector(s => s.cart);
  const TOTAL_PRODUCTS = items.length;
  return (
    <div className="page-container ">
      <div className="grid grid-cols-[auto_400px] gap-12">
        {/** INFOS */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="uppercase">informação de envio</h3>
          <Input placeholder="GERSON FUCA" className="w-full" />
          <Input placeholder="FUCA" className="w-full" />
          <Input placeholder="GERSONFUCA@GMAIL.COM" className="w-full" />
          <Input placeholder="TELEFONE" className="w-full" />
          <Input placeholder="LUANDA" className="w-full" />
          <Input placeholder="RUA DO TIMOR, CRUZEIRO" className="w-full" />
        </div>
        {/** RESUME */}
        <div className="flex flex-col gap-8">
          <h3 className="uppercase font-bold">resumo</h3>
          <div className="flex items-center justify-between uppercase">
            <span>{TOTAL_PRODUCTS} produtos</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex items-center justify-between uppercase gap-4">
            <Input placeholder="CUPOM DE DESCONTO" />
            <Button className="uppercase">aplicar</Button>
          </div>
          <Button onClick={() => navigate({ to: '/payment/step-2' })} className="w-full uppercase">
            continuar
          </Button>
        </div>
      </div>
    </div>
  );
}
