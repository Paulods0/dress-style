import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function ScheduleConsultingSection() {
  return (
    <section className="grid grid-cols-2 gap-7 min-h-[750px] w-full">
      <img src="/images/pink-suit-2.webp" alt="pink-suit" className="h-full w-full object-cover" />

      <div className="relative flex items-center justify-center w-full h-full">
        <img
          alt="white-background"
          src="/images/white-background.webp"
          className=" absolute inset-0 w-full h-full object-cover"
        />

        <div className="flex z-10 flex-col gap-8 p-14">
          <div className="flex flex-col gap-6">
            <h2 className="uppercase text-3xl font-semibold">VISITE O NOSSO ATELIER</h2>
            <p className="text-lg">
              Estamos aqui para o ajudar a acertar. Tire as suas medidas profissionalmente, escolha o tecido perfeito e
              crie o seu visual personalizado com a ajuda dos nossos estilistas.
            </p>
          </div>
          <Button className="uppercase w-fit">
            agendar consulta <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
