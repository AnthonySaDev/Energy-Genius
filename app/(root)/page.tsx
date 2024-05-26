'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/sign-in');
    }, 1000); // Redireciona após 1 segundo

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <h1 className="text-4xl font-bold text-center">
        Bem-vindo ao <span className="text-green-600">Energy Genius</span>
      </h1>

      <p className="text-center text-2xl font-semibold">Carregando...</p>
    </main>
  );
}
