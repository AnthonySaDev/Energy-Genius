"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (email === user.email && password === user.password) {
        router.push('/');
      } else {
        setError('Email ou senha incorretos.');
      }
    } else {
      setError('Usuário não encontrado.');
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center gap-3">
        <CardTitle className="text-2xl font-bold">Ficamos felizes por ter voltado!</CardTitle>
        <CardDescription>Faça login para ter acesso a sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="Seu e-mail:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="Sua senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center">
        <Button className="mx-auto" variant="default" onClick={handleSignIn}>
          Conectar
        </Button>
      </CardFooter>
      <div className="flex flex-col pb-4 gap-4">
        <span className="text-center text-sm">Não possui cadastro ainda?</span>
        <Link href="/sign-up" passHref className='flex items-center justify-center'>
          <Button variant="outline">Crie uma conta</Button>
        </Link>
      </div>
    </Card>
  );
}
