import { Button } from '@/components/ui/button';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/(private)/payment/step-3')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="flex flex-col gap-6 items-center justify-center">
        <img src="/images/payment-success.png" alt="" />
        <h3 className="text-2xl font-bold">pagamento bem sucedido</h3>
        <p className="w-[444px] text-justify">
          Parabéns, a sua encomenda na Dress Style foi efectuada com sucesso. pode seguir a sua encomenda através da ID
          da encomenda
        </p>
        <div className="flex items-center gap-4">
          <span>seu código</span>
          <span className="px-4 py-2 bg-[#ADA388]/30">#{Math.floor(Math.random() * 50000)}</span>
        </div>
        <div className="flex items-center gap-4 w-[444px]">
          <Button onClick={() => navigate({ to: '/' })} className="uppercase" variant={'outline'}>
            voltar ao catálogo
          </Button>
          <Button className="uppercase">acompanhar a encomenda</Button>
        </div>
      </div>
    </div>
  );
}
