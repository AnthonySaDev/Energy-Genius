'use client'
import { IData, Pdf } from '@/components/Pdf/Pdf';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaFilePdf, FaBolt } from 'react-icons/fa';
import { UserProps } from '../page';
import LineGraph from '@/components/Charts/Line';

const bills = [
  { id: 1, month: 'Janeiro', consumption: 48 },
  { id: 2, month: 'Fevereiro', consumption: 53 },
  { id: 3, month: 'Março', consumption: 77 },
  { id: 4, month: 'Abril', consumption: 66 },
  { id: 5, month: 'Maio', consumption: 52 },
  { id: 6, month: 'Junho', consumption: 73 },
];

const fakeBills = [
  { id: 1, month: 'Janeiro', consumption: 0 },
  { id: 2, month: 'Fevereiro', consumption: 0 },
  { id: 3, month: 'Março', consumption: 0 },
  { id: 4, month: 'Abril', consumption: 0 },
  { id: 5, month: 'Maio', consumption: 0 },
  { id: 6, month: 'Junho', consumption: 0 },
];

const monthMapping: { [key: string]: number } = {
  'Janeiro': 0,
  'Fevereiro': 1,
  'Março': 2,
  'Abril': 3,
  'Maio': 4,
  'Junho': 5,
  'Julho': 6,
  'Agosto': 7,
  'Setembro': 8,
  'Outubro': 9,
  'Novembro': 10,
  'Dezembro': 11
};

function getDueDate(month: string): string {
  const currentDate = new Date();
  const monthIndex = monthMapping[month];
  currentDate.setMonth(monthIndex + 1); // Next month
  const dueMonth = currentDate.toLocaleString('default', { month: 'long' });
  const dueYear = currentDate.getFullYear();
  return `${dueMonth}/${dueYear}`;
}

export default function History() {
  const router = useRouter();
  const [viewPdf, setViewPdf] = useState(false);
  const [data, setData] = useState<IData | null>(null);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const togglePdfViewer = () => {
    setViewPdf(!viewPdf);
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (!loggedUser) {
      router.push('/sign-in');
    } else {
      setUser(JSON.parse(loggedUser));
    }
  }, [router]);

  const generateData = async (bill: { id?: number; month: string; consumption: number; }) => {
    const { month, consumption } = bill;
    const costPerKWh = 0.95884098;
    const totalCost = consumption * costPerKWh;
    setData({
      user: user?.firstName,
      energyConsumption: consumption,
      totalCost: totalCost.toFixed(2),
      address: `${user.address.logradouro}, ${user.address.numero}, ${user.address.bairro}, ${user.address.cidade} - ${user.address.estado}`,
      amountToPay: totalCost.toFixed(2),
      cpf: user.cpfCnpj,
      costPerKWh: costPerKWh,
      discount: user?.firstName === 'Anthony' ? 'R$ 58,23' : 'R$ 0,00',
      dueDate: getDueDate(month),
      economy: user?.firstName === 'Anthony' ? 'R$ 18,22' : 'R$ 0,00',
      emissionDate: user?.firstName === 'Anthony' ? '01/06/2024' : 'Não emitida',
      installationNumber: '123456',
      referenceMonth: month,
      graphImage: '',
    });
    setViewPdf(true);
  };

  const billList = user.firstName === "Anthony" ? bills : fakeBills;

  return (
    <div className="p-10 mx-auto">
      <h1 className="text-4xl mb-8 font-bold text-green-700 text-center">Histórico de Contas</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-10">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="p-3 text-left">Mês</th>
            <th className="p-3 text-left">Consumo (kWh)</th>
            <th className="p-3 text-left">Gerar PDF</th>
          </tr>
        </thead>
        <tbody>
          {billList.map(bill => (
            <tr key={bill.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3 flex items-center">
                <FaBolt className="text-yellow-500 mr-2" />
                {bill.month}
              </td>
              <td className="p-3">{bill.consumption}</td>
              <td className="p-3">
                <Button variant={"outline"} onClick={() => generateData(bill)} className="text-green-700 hover:underline flex items-center">
                  <FaFilePdf className="mr-2" />
                  Gerar PDF
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data && (
        <div className='flex flex-col justify-around items-center'>
          <div>
            <PDFDownloadLink document={<Pdf data={data} />} fileName="dados.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'Baixar PDF')}
            </PDFDownloadLink>
            <Button variant="outline" className="rounded mx-10 mb-10" onClick={togglePdfViewer}>
              {viewPdf ? 'Ocultar PDF' : 'Mostrar PDF'}
            </Button>
          </div>
          <div>
            {viewPdf && (
              <div className="flex justify-center mt-10">
                <PDFViewer width="900" height="800">
                  <Pdf data={data} />
                </PDFViewer>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="text-center text-lg text-gray-700">
        <p className="mb-5">
          A utilização de energia limpa não só protege nosso meio ambiente, mas também proporciona um futuro mais sustentável para todos. Nossa empresa está comprometida em ajudar nossos clientes a monitorar e reduzir seu consumo de energia, promovendo práticas sustentáveis e eficientes.
        </p>
        <p>
          A Energy Genius oferece ferramentas inovadoras para que você possa tomar decisões informadas sobre seu uso de energia. Junte-se a nós na missão de criar um mundo mais verde e eficiente.
        </p>
      </div>
    </div>
  );
}
