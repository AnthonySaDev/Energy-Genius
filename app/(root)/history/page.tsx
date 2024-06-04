import React from 'react';
import { FaFilePdf, FaBolt } from 'react-icons/fa';

const bills = [
  { id: 1, month: 'Janeiro', consumption: 48 },
  { id: 2, month: 'Fevereiro', consumption: 53 },
  { id: 3, month: 'Março', consumption: 77 },
  { id: 4, month: 'Abril', consumption: 66 },
  { id: 5, month: 'Maio', consumption: 52 },
  { id: 6, month: 'Junho', consumption: 73 },
];

export default function History() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
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
          {bills.map(bill => (
            <tr key={bill.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3 flex items-center">
                <FaBolt className="text-yellow-500 mr-2" />
                {bill.month}
              </td>
              <td className="p-3">{bill.consumption}</td>
              <td className="p-3">
                <a href="#" className="text-green-700 hover:underline flex items-center">
                  <FaFilePdf className="mr-2" />
                  Gerar PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
