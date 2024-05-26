import { SignInForm } from "@/components/SignInForm/SignInForm";
import { SignUpForm } from "@/components/SignUpForm/SignUpForm";


export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <h1 className="text-4xl font-bold text-center">
       Bem-vindo ao <span className="text-green-600">Energy Genius</span>
      </h1>
      <SignUpForm />
    </main>
  );
}
