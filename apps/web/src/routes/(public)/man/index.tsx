import React from 'react';
import { ChevronDown, X } from 'lucide-react';
import SuitCard from '@/components/suit-card';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { SUITS_DATA } from '@/db';

export const Route = createFileRoute('/(public)/man/')({
  component: ManPage,
});

const filters = [
  { id: 1, label: 'Todos' },
  { id: 2, label: 'Ternos' },
  { id: 3, label: 'Blazers' },
  { id: 4, label: 'Camisas' },
  { id: 5, label: 'Calças' },
  { id: 6, label: 'Sapatos' },
];

function ManPage() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-[72px] flex flex-col gap-6">
      {/** FILTERS */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          {filters.map(filter => (
            <Button variant={'ghost'} key={filter.id} className="uppercase">
              {filter.label}
            </Button>
          ))}
        </div>

        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button variant={'ghost'} className="uppercase">
              filtros
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="border-b mb-4">
              <div className=" flex justify-between w-full">
                <DrawerTitle className="uppercase">Filtros</DrawerTitle>
                <Button onClick={() => setIsOpen(false)} size={'icon'} variant={'ghost'}>
                  <X />
                </Button>
              </div>
            </DrawerHeader>
            <ul className="flex flex-col gap-4 px-4">
              {drawerFilters.map(filter => (
                <li className="flex items-center py-4 justify-between">
                  <span className="uppercase">{filter}</span>
                  <ChevronDown />
                </li>
              ))}
            </ul>
            <DrawerFooter>
              <div className="uppercase flex gap-4 w-full">
                <Button className="flex-1" variant={'outline'}>
                  Apagar filtros
                </Button>
                <Button className="flex-1">Salvar filtros</Button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/** CONTENT */}
      <div className="w-full grid grid-cols-4 gap-6">
        {SUITS_DATA.map(suit => (
          <SuitCard key={suit.id} suit={suit} />
        ))}
      </div>
    </div>
  );
}

const drawerFilters = ['tamanho', 'tecido', 'cor', 'estilo', 'preço', 'marca', 'fabricante'];
