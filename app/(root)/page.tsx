'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LineGraph from '@/components/Charts/Line';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import { IData, Pdf } from '@/components/Pdf/Pdf';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { toPng } from 'html-to-image';
import { FaSpinner } from 'react-icons/fa';

export interface UserProps {
  firstName: string;
  lastName?: string;
  email: string;
  cpfCnpj: string;
  address: {
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}

export interface Customer {
  name: string;
  instalationNumber: string;
  consumption: number;
}

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [kwhValueLocal, setKwhValueLocal] = useState<number>(0);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [viewPdf, setViewPdf] = useState(false);
  const [data, setData] = useState<IData | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    const kwhValue = localStorage.getItem('kwhValue');
    const customers = localStorage.getItem('customers');

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    } else {
      router.push('/sign-in');
    }

    if (kwhValue) {
      setKwhValueLocal(parseFloat(kwhValue));
    }

    if (customers) {
      setCustomers(JSON.parse(customers));
    }

    setIsLoaded(true);
  }, [router]);

  const generateData = async () => {
    const energyConsumption =
      customers[0]?.name === 'Anthony Sá' && user?.firstName === 'Anthony'
        ? customers[0].consumption
        : customers[1]?.consumption || 0;
    const costPerKWh = kwhValueLocal;
    const totalCost = energyConsumption * costPerKWh;

    const node = document.getElementById('graph');

    if (node) {
      const graphImage = await toPng(node);

      if (user) {
        setData({
          user: user.firstName,
          energyConsumption,
          totalCost: totalCost.toFixed(2),
          address: `${user.address.logradouro}, ${user.address.numero}, ${user.address.bairro}, ${user.address.cidade} - ${user.address.estado}`,
          amountToPay: totalCost.toFixed(2),
          cpf: user.cpfCnpj,
          costPerKWh,
          discount: `R$ ${(totalCost - totalCost * 0.85).toFixed(2)}`,
          dueDate: 'julho/2024',
          economy: `${((totalCost - totalCost * 0.85) - totalCost / 100).toFixed(2)}%`,
          emissionDate: '01/06/2024',
          installationNumber: customers[0]?.name === 'Anthony Sá' && user?.firstName === 'Anthony'
            ? customers[0].instalationNumber
            : customers[1]?.instalationNumber || '',
          referenceMonth: 'Junho',
          graphImage,
        });
        setViewPdf(true);
      }
    } else {
      console.error('Elemento não encontrado');
    }
  };

  const togglePdfViewer = () => {
    setViewPdf(!viewPdf);
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <FaSpinner className="animate-spin text-6xl text-green-500" />
      </div>
    );
  }

  return (
    <section className="home p-10 bg-gray-100 min-h-screen mb-10">
      <div className="home-content max-w-4xl mx-auto">
        <header className="home-header mb-8">
          <HeaderBox
            type="greeting"
            title="Bem-vindo(a)"
            user={user?.firstName || "Usuário"}
            subtext="Acesse e gerencie seus dados com eficiência."
          />
        </header>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Consumo de Energia</h2>
          <p className="text-lg text-gray-700">Abaixo está o gráfico do seu consumo de energia no último mês. Utilize essa informação para monitorar e otimizar seu uso de energia.</p>
        </div>
        <div className="max-w-full h-fit bg-white shadow-md rounded-lg p-5 mb-10" id="graph">
          <LineGraph firstName={user?.firstName || ""}/>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-8">Tenha acesso rápido ao relatório desse mês:</h1>
          <Button variant="outline" className="rounded mr-10 mb-10" onClick={generateData}>
            Gerar PDF
          </Button>
          {data && (
            <>
              <PDFDownloadLink document={<Pdf data={data} />} fileName="dados.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'Baixar PDF')}
              </PDFDownloadLink>
              <Button variant="outline" className="rounded mx-10 mb-10" onClick={togglePdfViewer}>
                {viewPdf ? 'Ocultar PDF' : 'Mostrar PDF'}
              </Button>
              {viewPdf && (
                <div className="flex justify-center mt-10">
                  <PDFViewer width="900" height="800">
                    <Pdf data={data} />
                  </PDFViewer>
                </div>
              )}
            </>
          )}
        </div>
        <div className="my-10 text-center text-lg text-gray-700">
          <p className="mb-5">
            A utilização de energia limpa não só protege nosso meio ambiente, mas também proporciona um futuro mais sustentável para todos. Nossa empresa está comprometida em ajudar nossos clientes a monitorar e reduzir seu consumo de energia, promovendo práticas sustentáveis e eficientes.
          </p>
          <p>
            A Energy Genius oferece ferramentas inovadoras para que você possa tomar decisões informadas sobre seu uso de energia. Junte-se a nós na missão de criar um mundo mais verde e eficiente.
          </p>
        </div>
      </div>
    </section>
  );
}
