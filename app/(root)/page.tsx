'use client';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const loggedIn ={
    firtsName: "Anthony",
  };

  return (
    <section className="home">
      <div className="home-content">
      <header className="home-header">
        <HeaderBox 
        type="greeting"
        title="Bem-vindo(a)"
        user={loggedIn?.firtsName || "Usuário" }
        subtext="Acesse e gerencie seus dados com eficiência."
        />
      </header>
      </div>
    </section>
  );
}
