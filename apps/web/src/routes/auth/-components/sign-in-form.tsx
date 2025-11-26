import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const signInSchema = z.object({
  email: z.email().min(1, 'O email é obrigatório.'),
  password: z.string().min(6, 'A palavra-passe deve ter no mínimo 6 caracteres.'),
});

export type SignInType = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <Form {...form}>
      <form className="w-[508px] flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full mb-8">
          <h1 className="font-bold text-5xl">Bem-vindo de volta!</h1>
          <p className="text-zinc-600">
            Acede à tua conta para continuares as tuas compras, consultares encomendas ou aproveitares ofertas
            exclusivas.
          </p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Palavra-passe" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Link to="/" className="self-end text-zinc-500 text-sm">
          Esqueceu a sua palavra-passe?
        </Link>
        <Button type="submit" className="w-full uppercase">
          Entrar
        </Button>

        <section className="mt-10 flex items-center flex-col gap-10">
          <div className="flex w-full items-center gap-3">
            <hr className="w-full h-px bg-zinc-500" />
            <span className="text-zinc-500">Ou</span>
            <hr className="w-full h-px bg-zinc-500" />
          </div>

          <div className="flex w-full flex-col gap-4">
            <Button type="submit" variant={'outline'} className="w-full uppercase">
              <img src="/svg/google-icon.svg" alt="google-icon" />
              Entrar com o google
            </Button>
            <Button type="submit" variant={'outline'} className="w-full uppercase">
              <img src="/svg/apple-icon.svg" alt="apple-icon" />
              Entrar com a apple
            </Button>
          </div>
          <p className="flex gap-1">
            <span className="text-zinc-500">Não tem conta?</span>
            <Link className="text-black" to="/auth/sign-up">
              Crie uma conta
            </Link>
          </p>
        </section>
      </form>
    </Form>
  );
}
