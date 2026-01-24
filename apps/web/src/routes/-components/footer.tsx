import { ArrowUp, Headset, Users } from 'lucide-react';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl';

const socialLinks = [
  {
    icon: <SlSocialLinkedin />,
    href: 'https://linkedin.com/',
  },
  {
    icon: <SlSocialInstagram />,
    href: 'https://instagram.com/',
  },
  {
    icon: <SlSocialYoutube />,
    href: 'https://youtube.com/',
  },
];

function FooterMenuList() {
  return (
    <div className='flex flex-col'>
      <h3 className='font-semibold'>Explorar</h3>
      <ul className='text-zinc-400'>
        <li>Início</li>
        <li>Operações</li>
        <li>Contato</li>
      </ul>
    </div>
  );
}

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='flex mt-10 flex-col gap-10 py-4 w-full bg-neutral-900 text-white p-global-padding-horizontal'>
      <div className='w-full border-b border-b-zinc-700 py-8 flex items-center gap-4 justify-between'>
        <img src='/svg/white-logo.svg' alt='white-logo' />

        <button onClick={handleScrollToTop} className='cursor-pointer flex items-center gap-2'>
          <span className='text-sm'>Voltar ao topo</span>
          <span className='rounded-full bg-golden flex items-center justify-center size-6'>
            <ArrowUp size={12} />
          </span>
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 border-b border-b-zinc-700 pb-4'>
        <FooterMenuList />
        <FooterMenuList />
        <FooterMenuList />
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 bg-neutral-700 rounded-[10px] p-6'>
            <h3>Contacto</h3>
            <div className='flex items-center gap-2'>
              <div className='w-full flex flex-col gap-2 items-center justify-center bg-neutral-900 p-4 rounded-xl'>
                <Headset className='text-golden' />
                <p>Central de ajuda</p>
              </div>
              <div className='w-full flex flex-col gap-2 items-center justify-center bg-neutral-900 p-4 rounded-xl'>
                <Users className='text-golden' />
                <p>Team de vendas</p>
              </div>
            </div>
            <p>
              Expediente: <span className='text-zinc-400'>Das 9h às 18h (dias úteis)</span>
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <h3>Onde estámos</h3>
            <span className='text-zinc-600'>Rua do timor, cruzeiro</span>
            <h3>Acompanha a Bloxs</h3>
            <div className='flex items-center gap-2'>
              {socialLinks.map((link, index) => (
                <a
                  target='_blank'
                  key={index}
                  href={link.href}
                  rel='noopener noreferrer'
                  className='icon-rounded bg-golden'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Dress Style. Todos os direitos reservados.</p>
    </footer>
  );
}
