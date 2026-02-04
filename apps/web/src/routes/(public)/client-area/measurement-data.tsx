import z from 'zod';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectOption from '@/components/select-option';
import { useForm, type Resolver } from 'react-hook-form';
import { createFileRoute } from '@tanstack/react-router';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/client-area/measurement-data')({
  component: MeasurementDataPage,
});

const measurementFormSchema = z.object({
  weight: z.coerce.number(),
  height: z.coerce.number(),
  abs: z.string(),
  chest: z.string(),
});

type MeasurementFormDTO = z.infer<typeof measurementFormSchema>;

const abs = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];

const chests = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];

const heights = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];

const weights = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
];

function MeasurementDataPage() {
  const methods = useForm<MeasurementFormDTO>({
    resolver: zodResolver(measurementFormSchema) as Resolver<MeasurementFormDTO>,
  });

  const onSubmit = (data: MeasurementFormDTO) => {
    console.log(data);
    toast.success('Salvo com sucesso');
  };

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='uppercase text-xl font-medium'>medidas salvas</h2>

      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='flex w-full lg:w-[800px] flex-col gap-8'>
          <fieldset className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <FormField
              name='weight'
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase'>peso</FormLabel>
                  <FormControl>
                    <SelectOption className='w-full' placeholder='PESO' items={weights} onChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name='height'
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase'>altura</FormLabel>
                  <FormControl>
                    <SelectOption className='w-full' placeholder='ALTURA' items={heights} onChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </fieldset>

          <fieldset className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <FormField
              name='weight'
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase'>abdomen</FormLabel>
                  <FormControl>
                    <SelectOption className='w-full' placeholder='ABDOMEN' items={abs} onChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name='chest'
              control={methods.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='uppercase'>peito</FormLabel>
                  <FormControl>
                    <SelectOption className='w-full' placeholder='PEITO' items={chests} onChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </fieldset>
          <Button className='w-full uppercase'>salvar medidas</Button>
        </form>
      </Form>
    </div>
  );
}
