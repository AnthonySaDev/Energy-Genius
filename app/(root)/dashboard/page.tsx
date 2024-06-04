'use client';
import LineGraph from '@/components/Charts/Line';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import { IData, Pdf } from '@/components/Pdf/Pdf';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { toPng } from 'html-to-image';
import { useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewPdf, setViewPdf] = useState(false);
  const [data, setData] = useState<IData | null>(null);

  const loggedIn = {
    firstName: "Anthony",
  };

  const generateData = async () => {
    const energyConsumption = 73; 
    const costPerKWh = 0.95884098; 
    const totalCost = energyConsumption * costPerKWh; 

    const node = document.getElementById('graph');
    
    if (node) {
      const graphImage = await toPng(node);

      setData({
        user: loggedIn.firstName,
        energyConsumption,
        totalCost: totalCost.toFixed(2),
        address: 'Rua Ana Catarina, 131, Jardim das Flores, Tucurui, BR',
        amountToPay: totalCost.toFixed(2),
        cpf: '123.456.789-10',
        currentConsumption: '73 kWh',
        discount: 'R$ 58,23',
        dueDate: '07/2024',
        economy: 'R$ 18,22',
        emissionDate: '01/06/2024',
        installationNumber: '123456',
        referenceMonth: 'Junho',
        graphImage,
      });
      setViewPdf(true); // Mostra o PDF após os dados serem gerados
    } else {
      console.error('Elemento não encontrado');
    }
  };

  const togglePdfViewer = () => {
    setViewPdf(!viewPdf);
  };

  return (
    <section className="home p-10 bg-gray-100 min-h-screen">
      <div className="home-content max-w-4xl mx-auto">
        <header className="home-header mb-8">
          <HeaderBox 
            type="greeting"
            title="Bem-vindo(a)"
            user={loggedIn?.firstName || "Usuário" }
            subtext="Acesse e gerencie seus dados com eficiência."
          />
        </header>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Seu Consumo de Energia</h2>
          <p className="text-lg text-gray-700">Abaixo está o gráfico do seu consumo de energia no último mês. Utilize essa informação para monitorar e otimizar seu uso de energia.</p>
        </div>
        <div className="max-w-full bg-white shadow-md rounded-lg p-5 mb-10" id="graph">
          <LineGraph />
        </div>
        <div className="text-center">
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
        <div className="mt-10 text-center text-lg text-gray-700">
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
