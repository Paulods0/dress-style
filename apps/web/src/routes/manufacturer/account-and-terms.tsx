import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import z from 'zod';

export const Route = createFileRoute('/manufacturer/account-and-terms')({
  component: RouteComponent,
});

const accountAndTermsSchema = z
  .object({
    password: z.string('A palavra-passe é obrigatória').min(8, 'A palavra-passe deve ter pelo menos 8 caracteres'),
    confirmPassword: z
      .string('A confirmação da palavra-passe é obrigatória')
      .min(8, 'A confirmação da palavra-passe deve ter pelo menos 8 caracteres'),
    terms: z.boolean('Você deve aceitar os termos e condições'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    error: 'As palavras-passe não coincidem',
  });

type AccountAndTermsForm = z.infer<typeof accountAndTermsSchema>;

function RouteComponent() {
  const navigate = useNavigate();

  const methods = useForm<AccountAndTermsForm>({
    resolver: zodResolver(accountAndTermsSchema),
  });

  const onSubmit = (data: AccountAndTermsForm) => {
    console.log(data);
    navigate({ to: '/manufacturer/registered' });
  };

  return (
    <div className='h-full flex flex-col gap-10 items-start justify-start'>
      <h1 className='text-2xl font-semibold'>Conta e Termos</h1>

      <Form {...methods}>
        <form className='flex flex-col gap-8' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            control={methods.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Palavra-passe</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Insira a palavra-passe' type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar palavra-passe</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Confirme a palavra-passe' type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name='terms'
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center gap-2'>
                  <FormControl>
                    <Input type='checkbox' onChange={field.onChange} checked={field.value} />
                  </FormControl>
                  <FormLabel>Concorda com os nosso termos e condições</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='mt-10 w-full lg:w-50' type='submit'>
            Submeter
          </Button>
        </form>
      </Form>
    </div>
  );
}
