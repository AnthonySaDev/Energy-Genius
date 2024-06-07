import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineCharData } from '@/constants'
import { UserProps } from '@/app/(root)/page'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface LineGraphProps {
  firstName: string;
}

export default function LineGraph({ firstName }: LineGraphProps) {
  const options = {}
  const dataLine = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }
  return (
    <Line data={firstName === "Anthony" ? lineCharData : dataLine} options={options} />
  )
}
