import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Customer, UserProps } from '@/app/(root)/page';
import { lineCharData } from '@/constants';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
};

const customersFromLocalStorage = localStorage.getItem('customers');
let customers: Customer[] = [];

if (customersFromLocalStorage) {
  customers = JSON.parse(customersFromLocalStorage);
}

interface LineGraphProps {
  firstName: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ firstName }) => {
  const options = {};

  const dataLine: LineChartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [0, 0, 0, 0, 0, customers.length > 1 ? customers[1].consumption : 0], 
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Line data={firstName === "Anthony" ? lineCharData : dataLine} options={options} />
  );
};

export default LineGraph;
