import { Headset, Users } from 'lucide-react';

function FooterMenuList() {
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold">Explorar</h3>
      <ul className="text-zinc-400">
        <li>Início</li>
        <li>Operações</li>
        <li>Contato</li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flex mt-10 flex-col gap-10 py-4 w-full bg-neutral-900 text-white p-global-padding-horizontal">
      <div className="w-full border-b border-b-zinc-700 py-8 flex items-center gap-4">
        <img src="/svg/white-logo.svg" alt="white-logo" />
      </div>

      <div className="grid grid-cols-4 gap-2 border-b border-b-zinc-700 pb-4">
        <FooterMenuList />
        <FooterMenuList />
        <FooterMenuList />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 bg-neutral-700 rounded-[10px] p-6">
            <h3>Contacto</h3>
            <div className="flex items-center gap-2">
              <div className="w-full flex flex-col gap-2 items-center justify-center bg-neutral-900 p-4 rounded-xl">
                <Headset />
                <p>Central de ajuda</p>
              </div>
              <div className="w-full flex flex-col gap-2 items-center justify-center bg-neutral-900 p-4 rounded-xl">
                <Users />
                <p>Team de vendas</p>
              </div>
            </div>
            <p>
              Expediente: <span className="text-zinc-400">Das 9h às 18h (dias úteis)</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3>Onde estámos</h3>
            <span className="text-zinc-600">Rua do timor, cruzeiro</span>
            <h3>Acompanha a Bloxs</h3>
            <div className="flex items-center gap-2">
              <span>linkedin</span>
              <span>instagram</span>
              <span>youtube</span>
            </div>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Dress Style. Todos os direitos reservados.</p>
    </footer>
  );
}
