'use client';
import LineGraph from '@/components/Charts/Line';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
        <h1></h1>
        <div className='max-w-[900px]'>
        <LineGraph />
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}
