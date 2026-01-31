import z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Image } from 'lucide-react';
import { useState, type DragEvent } from 'react';
import { Button } from './ui/button';
import { Link } from '@tanstack/react-router';

const customizeSuitScheme = z.object({
  image: z.file('A imagem é obrigatória').refine((file) => {
    if (!file) return false;
    return file.type.startsWith('image/');
  }, 'Apenas imagens são permitidas'),
});

type CustomizeSuitDTO = z.infer<typeof customizeSuitScheme>;

export default function CustomizeSuiteForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const methods = useForm<CustomizeSuitDTO>({
    resolver: zodResolver(customizeSuitScheme),
  });

  const handleSubmit = (data: CustomizeSuitDTO) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      methods.setValue('image', file);
      setPreviewImage(preview);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      methods.setValue('image', file);
      setPreviewImage(preview);
    }
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className='w-full flex flex-col gap-8 items-center'>
        <h1 className='uppercase text-center'>Carregue uma imagem de preferência</h1>

        <FormField
          control={methods.control}
          name='image'
          render={() => (
            <FormItem className='w-full'>
              <FormControl>
                <label
                  htmlFor='image'
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className='border-2 rounded hover:border-black transition-colors duration-200 ease-in-out cursor-pointer border-dashed border-zinc-400 w-full h-[230px]'>
                  {previewImage ? <PreviewImage preview={previewImage} /> : <SelectImage />}
                  <Input
                    hidden
                    id='image'
                    type='file'
                    accept='image/jpeg,image/jpg, image/png'
                    onChange={handleImageChange}
                  />
                </label>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link to='/customize/step-2' className='w-full'>
          <Button className='w-full'>Continuar</Button>
        </Link>
      </form>
    </Form>
  );
}

const PreviewImage = ({ preview }: { preview: string }) => {
  return <img src={preview} alt='' className='w-full h-full object-cover' />;
};

const SelectImage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
      <Image />
      <p className='text-center text-sm'>
        Arraste e largue as suas imagens aqui ou <span className='font-bold'>procure nos ficheiros</span>
      </p>
    </div>
  );
};
