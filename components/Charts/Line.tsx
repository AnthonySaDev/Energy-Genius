import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineCharData } from '@/constants'

ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend)
export default function LineGraph() {
  
    const options = {}
  
    return (
    <Line data={lineCharData} options={options}/>
  )
}
