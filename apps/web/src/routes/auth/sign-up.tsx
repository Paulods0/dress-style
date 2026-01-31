import { createFileRoute } from '@tanstack/react-router';
import SignUpForm from './-components/sign-up-form';

export const Route = createFileRoute('/auth/sign-up')({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div className='h-screen grid grid-cols-[1fr_700px] p-2 gap-2'>
      <div className='grow flex items-center justify-center'>
        <SignUpForm />
      </div>

      <div className='relative w-full h-full '>
        <img
          alt='sign-in-image'
          src='/images/sign-up.webp'
          className='absolute inset-0 w-full h-full object-cover rounded-[10px]'
        />
      </div>
    </div>
  );
}
