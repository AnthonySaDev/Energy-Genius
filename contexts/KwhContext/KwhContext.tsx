"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Customer {
  name: string;
  instalationNumber: string;
  consumption: number;
}

interface KwhContextProps {
  kwhValue: number;
  setKwhValue: (value: number) => void;
  customers: Customer[];
  setCustomerConsumption: (name: string, consumption: number) => void;
}

const KwhContext = createContext<KwhContextProps | undefined>(undefined);

export const useKwh = () => {
  const context = useContext(KwhContext);
  if (!context) {
    throw new Error('useKwh must be used within a KwhProvider');
  }
  return context;
};

export const KwhProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kwhValue, setKwhValue] = useState<number>(parseFloat(localStorage.getItem('kwhValue') || '0.0'));
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : [
      { name: 'Anthony Sá', instalationNumber: '123456', consumption: 0 },
      { name: 'João Victor Fonseca', instalationNumber: '654321', consumption: 0 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('kwhValue', kwhValue.toString());
  }, [kwhValue]);

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const setCustomerConsumption = (name: string, consumption: number) => {
    setCustomers(prevCustomers =>
      prevCustomers.map(customer =>
        customer.name === name ? { ...customer, consumption } : customer
      )
    );
  };

  return (
    <KwhContext.Provider value={{ kwhValue, setKwhValue, customers, setCustomerConsumption }}>
      {children}
    </KwhContext.Provider>
  );
};