import { createFileRoute, Link } from '@tanstack/react-router';
import CustomizeContainer from './-components/customize-container';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(public)/customize/step-7')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CustomizeContainer title='resumo da personalização' backTo='/customize/step-6'>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4'>
        <div className='relative w-[346px] h-[422px]'>
          <img src='/images/blue-suit.png' className='absolute inset-0 w-full h-full object-cover' alt='' />
        </div>
        <div className='bg-neutral-50 p-6 flex flex-col gap-4'>
          <ResumeRow label='cor' content='content' />
          <ResumeRow label='tipo de ombro' content='content' />
          <ResumeRow label='lapelas' content='content' />
          <ResumeRow label='botões' content='content' />
          <ResumeRow label='bainha' content='content' />
          <ResumeRow label='dobras' content='content' />
          <hr className='w-full my-2' />
          <ResumeRow label='total' content='300.000.00AOA' />

          <Button className='uppercase'>
            <Link to='/customize/step-3'>adicionar ao carrinho</Link>
          </Button>
        </div>
      </div>
    </CustomizeContainer>
  );
}

type ResumeRowProps = {
  label: string;
  content: string;
};

const ResumeRow = ({ content, label }: ResumeRowProps) => {
  return (
    <div className='flex items-center uppercase justify-between'>
      <span className='font-semibold'>{label}:</span>
      <span>{content}</span>
    </div>
  );
};
