import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import dayjs from 'dayjs';

export const Route = createFileRoute('/(public)/client-area/appointments')({
  component: AppointmentsPage,
});

const appointments = [
  {
    service: 'recolha de medidas',
    location: 'presencial',
    date: dayjs('2026-01-01').format('DD/MM/YYYY'),
    time: dayjs(new Date()).format('HH:mm'),
    status: 'pending',
  },
];

function AppointmentsPage() {
  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='w-full flex flex-wrap gap-2 items-center justify-between'>
        <header className='flex flex-col gap-1'>
          <h2 className='uppercase font-medium text-xl'>agendamento de atendimento</h2>
          <span className='text-zinc-400'>
            Agende o seu atendimento personalizado com nossos especialistas em alfaiataria e estilo
          </span>
        </header>

        <Button className='uppercase'>realizar agendamento</Button>
      </div>

      {appointments.map((appointment, index) => (
        <div
          key={index}
          className='bg-zinc-100 border border-zinc-300 w-full flex items-center justify-between px-4 py-2 h-[55px]'>
          <header className='flex flex-col gap-1'>
            <h4 className='uppercase'>serviço: {appointment.service}</h4>
            <span className='text-zinc-400 text-sm'>
              {appointment.date} - {appointment.time}
            </span>
          </header>

          <div className='flex items-center gap-2 text-sm'>
            <span className='px-4 py-1 bg-yellow-200 text-yellow-600 rounded-full uppercase'>
              {appointment.location}
            </span>
            <Button variant='link' className='uppercase'>
              ver detalhes
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
