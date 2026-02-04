import SelectOption from '@/components/select-option';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

export const Route = createFileRoute('/(public)/client-area/notifications-and-preferences')({
  component: NotificationsAndPreferencesPage,
});

const preferencesFormSchema = z
  .object({
    newsLetter: z.boolean(),
    language: z.union([z.literal('pt'), z.literal('en')]),
    currency: z.union([z.literal('aoa'), z.literal('eur'), z.literal('usd')]),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { path: ['confirmPassword'], message: 'As senhas devem ser iguais' }
  );

type PreferencesFormSchema = z.infer<typeof preferencesFormSchema>;

const languages = [
  {
    label: 'Português',
    value: 'pt',
  },
  {
    label: 'English',
    value: 'en',
  },
];

const currencies = [
  {
    label: 'Kwanza',
    value: 'aoa',
  },
  {
    label: 'Euro',
    value: 'eur',
  },
  {
    label: 'Dollar',
    value: 'usd',
  },
];

function NotificationsAndPreferencesPage() {
  const methods = useForm<PreferencesFormSchema>({
    resolver: zodResolver(preferencesFormSchema),
  });

  const onSubmit = (data: PreferencesFormSchema) => {
    console.log(data);
    toast.success('Preferências salvas com sucesso');
  };

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='uppercase text-xl font-medium'>notificações</h2>

      <Form {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, (e) => console.error(e))}
          className='flex flex-col w-full lg:w-[800px] gap-6'>
          <fieldset className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <span className='uppercase font-medium'>newsletter</span>
              <span>Receba dicas de estilo e novidades da marca</span>
            </div>

            <FormField
              control={methods.control}
              name='newsLetter'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>

          <div className='flex flex-col gap-2'>
            <h2 className='uppercase font-medium'>preferências gerais </h2>
            <span className='text-sm'>Receba dicas de estilo e novidades da marca</span>
            <fieldset className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <FormField
                control={methods.control}
                name='language'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase'>idioma</FormLabel>
                    <FormControl>
                      <SelectOption
                        className='w-full'
                        items={languages}
                        placeholder='Português'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={methods.control}
                name='currency'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase'>moeda</FormLabel>
                    <FormControl>
                      <SelectOption
                        className='w-full'
                        items={currencies}
                        placeholder='Kwanza'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='uppercase font-medium'>privacidade e segurança </h2>
            <span className='text-sm'>Gerencie suas configurações de privacidade e segurança</span>
            <fieldset className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <FormField
                control={methods.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase'>alterar palavra-passe</FormLabel>
                    <FormControl>
                      <Input placeholder='*******' type='password' {...field} />
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
                    <FormLabel className='uppercase'>confirmar palavra-passe</FormLabel>
                    <FormControl>
                      <Input placeholder='*******' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
          </div>

          <Button type='submit' className='uppercase w-full'>
            salvar configurações
          </Button>
        </form>
      </Form>
    </div>
  );
}
