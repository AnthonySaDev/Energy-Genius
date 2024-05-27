import { SignInForm } from "@/components/SignInForm/SignInForm";
import { SignUpForm } from "@/components/SignUpForm/SignUpForm";
import Image from "next/image";
import energy from "../../../public/energy.png"

export default function SignUp() {
  return (
    <main className="min-h-screen grid gild-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-center my-5 text-[#2e2a47]">
       Bem-vindo ao <br></br><span className="text-green-600">Energy Genius</span>
      </h1>
      <SignUpForm />
      </div>
      <div className="h-full bg-green-600 hidden lg:flex items-center justify-center">
        <Image src={energy} alt="energy" width={400} height={400}/>
      </div>
    </main>
  );
}
