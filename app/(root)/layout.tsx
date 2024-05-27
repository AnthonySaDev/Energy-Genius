import MobileNavBar from "@/components/MobileNavBar/MobileNavBar";
import SideBar from "@/components/SiderBar/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: "Anthony", lastName: "Sá"};
  return (
  <main className="flex h-screen w-full">
    <SideBar user={loggedIn}/>
    
    <div className="flex size-full flex-col">
    <div className="root-layout">
      <Image src="/energy.png" alt="logo" width={40} height={40} className="menu icon"/>
      <div>
        <MobileNavBar user={loggedIn}/>
      </div>
    </div>
    {children}
    </div>
  </main>
  );
}
