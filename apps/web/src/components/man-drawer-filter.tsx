import React from 'react';
import { Button } from './ui/button';
import { X, ChevronDown } from 'lucide-react';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
// import { z } from 'zod';

const drawerFilters = ['tamanho', 'tecido', 'cor', 'estilo', 'preço', 'marca', 'fabricante'] as const;

// const manFilterSchema = z.object({
//   size: z.string().optional(),
//   tissue: z.string().optional(),
//   color: z.string().optional(),
//   style: z.string().optional(),
//   price: z.string().optional(),
//   brand: z.string().optional(),
//   manufacturer: z.string().optional(),
// });

// type ManFilterDTO = z.infer<typeof manFilterSchema>;

export default function ManDrawerFilter() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Drawer direction='right' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant={'ghost'} className='uppercase'>
          filtros
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='border-b mb-4'>
          <div className=' flex justify-between w-full'>
            <DrawerTitle className='uppercase'>Filtros</DrawerTitle>
            <Button onClick={() => setIsOpen(false)} size={'icon'} variant={'ghost'}>
              <X />
            </Button>
          </div>
        </DrawerHeader>
        <ul className='flex flex-col gap-4 px-4'>
          {drawerFilters.map((filter) => (
            <li className='flex items-center py-4 justify-between'>
              <span className='uppercase'>{filter}</span>
              <ChevronDown />
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <div className='uppercase flex gap-4 w-full'>
            <Button className='flex-1' variant={'outline'}>
              Apagar filtros
            </Button>
            <Button className='flex-1'>Salvar filtros</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
