import MobileNavBar from "@/components/MobileNavBar/MobileNavBar";
import SideBar from "@/components/SiderBar/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <main className="flex h-screen w-full">
    <SideBar />
    
    <div className="flex size-full flex-col">
    <div className="root-layout">
      <Image src="/energy.png" alt="logo" width={40} height={40} className="menu icon"/>
      <div>
        <MobileNavBar />
      </div>
    </div>
    {children}
    </div>
  </main>
  );
}
