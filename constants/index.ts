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

  export const lineCharData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [48, 53, 77, 66, 52, 73],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

    ],
  }
