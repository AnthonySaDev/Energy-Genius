import { Customer } from "@/app/(root)/page";

export const sidebarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/dollar-circle.svg",
      route: "/economy",
      label: "Sobre",
    },
    {
      imgURL: "/icons/transaction.svg",
      route: "/history",
      label: "Histórico",
    },
 
  ];

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
  
  export const lineCharData: LineChartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [48, 74, 77, 84, 78, customers.length > 0 ? customers[0].consumption : 90],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }