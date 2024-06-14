// src/pages/Admin.tsx
"use client"
import React, { useState, FormEvent } from 'react';
import { useKwh } from '@/contexts/KwhContext/KwhContext';

export default function Admin() {
  const { kwhValue, setKwhValue, customers, setCustomerConsumption } = useKwh();
  const [newKwhValue, setNewKwhValue] = useState<number>(kwhValue);

  const handleKwhSubmit = (e: FormEvent) => {
    e.preventDefault();
    setKwhValue(newKwhValue);
  };

  const handleCustomerConsumptionChange = (name: string, consumption: number) => {
    setCustomerConsumption(name, consumption);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md text-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Configuração do Valor do kWh</h1>
      <form onSubmit={handleKwhSubmit} className="space-y-4">
        <div>
          <label htmlFor="kwh-input" className="block text-lg font-medium text-gray-700">Valor do kWh:</label>
          <input
            type="number"
            id="kwh-input"
            step="0.0001" // Permite valores decimais com precisão de até quatro casas
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={newKwhValue}
            onChange={(e) => setNewKwhValue(parseFloat(e.target.value))}
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Salvar
        </button>
      </form>
      <p className="mt-4 text-lg">Valor atual do kWh: {kwhValue}</p>

      <h2 className="text-xl font-bold mt-8 mb-4">Consumo Mensal dos Clientes</h2>
      {customers.map((customer) => (
        <div key={customer.name} className="mb-4">
          <h3 className="text-lg font-medium">{customer.name} - {customer.instalationNumber}</h3>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={customer.consumption}
            onChange={(e) => handleCustomerConsumptionChange(customer.name, parseFloat(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
}
