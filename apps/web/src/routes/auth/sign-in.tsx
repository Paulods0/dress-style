import { createFileRoute } from '@tanstack/react-router';
import SignInForm from './-components/sign-in-form';

export const Route = createFileRoute('/auth/sign-in')({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className='h-screen grid grid-cols-[1fr_700px] p-2 gap-2'>
      <div className='grow flex items-center justify-center'>
        <SignInForm />
      </div>

      <div className='relative w-full h-full '>
        <img
          alt='sign-in-image'
          src='/images/sign-in.webp'
          className='absolute inset-0 w-full h-full object-cover rounded-[10px]'
        />
      </div>
    </div>
  );
}
