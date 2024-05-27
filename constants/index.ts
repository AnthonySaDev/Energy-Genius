export const sidebarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/dollar-circle.svg",
      route: "/economy",
      label: "Economia",
    },
    {
      imgURL: "/icons/transaction.svg",
      route: "/history",
      label: "Histórico",
    },
 
  ];

  export const lineCharData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

    ],
  }
