import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addUserInfo } from '@/store/payment-slice';
import { formatPrice } from '@/utils/price';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import z from 'zod';

export const Route = createFileRoute('/(private)/payment/step-1')({
  component: RouteComponent,
});

const paymentSchema = z.object({
  firstName: z.string('O nome é obrigatório').min(2, 'O nome deve conter pelo menos 2 caracteres'),
  lastName: z.string('O sobrenome é obrigatório').min(2, 'O sobrenome deve conter pelo menos 2 caracteres'),
  email: z.email('O email é obrigatório').min(2, 'O email deve conter pelo menos 2 caracteres'),
  phone: z
    .string('O telefone é obrigatório')
    .min(2, 'O telefone deve conter pelo menos 2 caracteres')
    .max(9, 'O telefone deve conter pelo menos 2 caracteres'),
  coupon: z.string().optional(),
  address: z.object({
    city: z.string('A cidade é obrigatória').min(2, 'A cidade deve conter pelo menos 2 caracteres'),
    district: z.string('O distrito é obrigatório').min(2, 'O distrito deve conter pelo menos 2 caractéres'),
  }),
});

type PaymentDTO = z.infer<typeof paymentSchema>;

function RouteComponent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { items, total } = useAppSelector((s) => s.cart);
  const TOTAL_PRODUCTS = items.length;

  const form = useForm<PaymentDTO>({
    resolver: zodResolver(paymentSchema),
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: PaymentDTO) => {
    console.log(data);
    dispatch(
      addUserInfo({
        paymentMethod: null,
        userInfo: {
          ...data,
          address: { city: data.address.city, district: data.address.district },
        },
      })
    );
    navigate({ to: '/payment/step-2' });
  };

  return (
    <div className='page-container'>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            className='grid grid-cols-1 lg:grid-cols-[auto_400px] gap-4 lg:gap-12'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2 w-full'>
              <h3 className='uppercase'>informação de envio</h3>

              <FormField
                control={control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='GERSON FUCA' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='FUCA' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='GERSONFUCA@GMAIL.COM' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='TELEFONE' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='address.city'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='LUANDA' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='address.district'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='RUA DO TIMOR, CRUZEIRO' className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <PaymentResume total={total} totalProducts={TOTAL_PRODUCTS} />
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}

const PaymentResume = ({ total, totalProducts }: { totalProducts: number; total: number }) => {
  const methods = useFormContext();

  return (
    <div className='flex flex-col gap-8'>
      <h3 className='uppercase font-bold'>resumo</h3>
      <div className='flex items-center justify-between uppercase'>
        <span>{totalProducts} produtos</span>
        <span>{formatPrice(total)}</span>
      </div>

      <div className='flex items-center justify-between uppercase gap-4'>
        <FormField
          control={methods.control}
          name='coupon'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input placeholder='CUPOM DE DESCONTO' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='button' className='uppercase'>
          aplicar
        </Button>
      </div>

      <Button type='submit' className='w-full uppercase'>
        continuar
      </Button>
    </div>
  );
};
