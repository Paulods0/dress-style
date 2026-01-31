import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import z from 'zod';

export const Route = createFileRoute('/(public)/manufacturer/register')({
  component: RouteComponent,
});

const createStoreSchema = z.object({
  name: z.string('O nome da loja é obrigatório').min(2, 'Deve ter pelo menos 2 caracteres'),
  userName: z.string('O nome do responsável é obrigatório').min(2, 'Deve ter pelo menos 2 caractéres.'),
  email: z.email('O email é obrigatório'),
  phone: z
    .string('O número do telefone é obrigatório')
    .regex(/^[0-9]{9}$/)
    .min(9, 'Deve ter pelo menos 9 caracteres')
    .max(9, 'Deve ter pelo menos 9 caracteres'),
  nif: z.string('O NIF é obrigatório'),
  bi: z.file('O bilhete de identidade é obrigatório'),
  criminalRecord: z.file('O registro criminal é obrigatório'),
});

type CreateStoreDTO = z.infer<typeof createStoreSchema>;

function RouteComponent() {
  const navigate = useNavigate();

  const methods = useForm<CreateStoreDTO>({
    resolver: zodResolver(createStoreSchema),
  });

  const onSubmit = (data: CreateStoreDTO) => {
    console.log(data);
    navigate({
      to: '/manufacturer/account-and-terms',
    });
  };

  const { control, handleSubmit } = methods;

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Form {...methods}>
        <form className='flex flex-col gap-8 w-full' onSubmit={handleSubmit(onSubmit)}>
          <h2>Dados da Loja</h2>

          <div className='flex flex-col gap-6'>
            <FormField
              control={control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da loja</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='userName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do responsável</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
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
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='nif'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIF</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Placeholder' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-cols-2 gap-4'>
              <FormField
                control={control}
                name='bi'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documento de identidade</FormLabel>
                    <FormControl>
                      <Input
                        type='file'
                        accept='.jpg, .png, .jpeg, .pdf'
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name='criminalRecord'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comprovativo de registo criminal</FormLabel>
                    <FormControl>
                      <Input
                        type='file'
                        accept='.jpg, .png, .jpeg, .pdf'
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button className='w-full lg:w-50' type='submit'>
            Continuar
          </Button>
        </form>
      </Form>
    </div>
  );
}
