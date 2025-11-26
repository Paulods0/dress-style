import { Link } from '@tanstack/react-router';
import type { FileRouteTypes } from '@/routeTree.gen';

import { SlBag } from 'react-icons/sl';
import { LucideUser, Search } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

interface NavLinks {
  label: string;
  path: FileRouteTypes['to'];
}

const navLinks: NavLinks[] = [
  {
    label: 'Homem',
    path: '/man',
  },
  {
    label: 'Mulher',
    path: '/woman',
  },
  {
    label: 'Acessórios',
    path: '/accessories',
  },
];

export default function Header() {
  const { items } = useAppSelector(state => state.cart);
  return (
    <header className="h-[75px] flex items-center justify-between p-global-padding-horizontal w-full border-b">
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link className="uppercase text-sm" to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/" className="cursor-pointer">
        <img src="/dress-style-logo-gold.svg" alt="logotipo" />
      </Link>

      <div className="flex items-center gap-4 uppercase">
        <Search strokeWidth={1} />
        <div className="w-px h-[25px] bg-zinc-300" />
        <Link to="/auth/sign-in" className="flex items-center gap-2">
          <LucideUser strokeWidth={1} />
          Entrar
        </Link>
        <Link to="/cart" className="flex items-center gap-2">
          <SlBag size={20} strokeWidth={1} />
          <span>
            Carrinho
            {items.length > 0 && <span>({items.length})</span>}
          </span>
        </Link>
      </div>
    </header>
  );
}
