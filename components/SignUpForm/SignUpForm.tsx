'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function SignUpForm() {
  const router = useRouter();

  const [accountType, setAccountType] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState({
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
  });

  const togglePasswordVisibility = (value: string) => {
    if (value === 'password') {
      setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password');
    }
  }
  const [passwordInputType, setPasswordInputType] = React.useState('password');

  const [step, setStep] = React.useState(1);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpfCnpj, setCpfCnpj] = React.useState('');
  const [nomeFantasia, setNomeFantasia] = React.useState('');

  const handleAccountTypeChange = (value: string) => {
    setAccountType(value);
  };

  const handleCepChange = (event: any) => {
    const newCep = event.target.value;
    setCep(newCep);

    if (newCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${newCep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setAddress({
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
              numero: data.numero || '',
            });
          }
        });
    }
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
      cpfCnpj,
      address: {
        logradouro: address.logradouro,
        bairro: address.bairro,
        cidade: address.cidade,
        estado: address.estado,
        numero: address.numero,
      },
      accountType,
      nomeFantasia: accountType === 'cnpj' ? nomeFantasia : undefined,
    };

    localStorage.setItem('user', JSON.stringify(user));

    console.log('User:', user);

    router.push('/');
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>Preencha os dados abaixo para criar sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" placeholder="Seu primeiro nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input id="lastName" placeholder="Seu sobrenome" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <section className="border border-black flex items-center">

              <Input
                id="password"
                type={passwordInputType}
                placeholder="**********"
                value={password}
                className="border-0"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div  onClick={ ()=> togglePasswordVisibility("password")} className="mr-2">
                {passwordInputType === 'password' ? <FaEyeSlash /> : <FaEye />}
              </div>
              </section>

          </div>      
              <div className="flex flex-col space-y-1.8">
                <Label htmlFor="accountType" className="my-3">Tipo de conta:</Label>
                <Select  onValueChange={handleAccountTypeChange}>
                  <SelectTrigger  id="accountType">
                    <SelectValue placeholder="CPF / CNPJ" />
                  </SelectTrigger>
                  <SelectContent className="bg-white" position="popper">
                    <SelectItem value="cpf">CPF</SelectItem>
                    <SelectItem value="cnpj">CNPJ</SelectItem>
                  </SelectContent>
                </Select>
                {accountType === 'cpf' && (
                  <div className="flex flex-col space-y-1.5 mt-2">
                    <Label htmlFor="cpf" className="my-3">CPF</Label>
                    <Input id="cpf" placeholder="Seu CPF" value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
                  </div>
                )}
                {accountType === 'cnpj' && (
                  <div className="flex flex-col space-y-1.5 mt-2">
                    <Label htmlFor="cnpj" className="my-2">CNPJ</Label>
                    <Input id="cnpj" placeholder="Seu CNPJ" value={cpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} />
                    <Label htmlFor="nomeFantasia" >Nome Fantasia</Label>
                    <Input id="nomeFantasia" className="my-3" placeholder="Nome fantasia da empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
                  </div>
                )}
              </div>
              <Button onClick={handleNextStep} size="sm" variant="outline" className="mx-auto mt-3">Próximo</Button>
            </div>
          )}

          {step === 2 && (
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cep">CEP</Label>
                <Input id="cep" placeholder="Seu CEP" value={cep} onChange={handleCepChange} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="logradouro">Logradouro</Label>
                <Input id="logradouro" placeholder="Logradouro" value={address.logradouro} readOnly />
                <Label htmlFor="bairro">Bairro</Label>
                <Input id="bairro" placeholder="Bairro" value={address.bairro} readOnly />
                <Label htmlFor="cidade">Cidade</Label>
                <Input id="cidade" placeholder="Cidade" value={address.cidade} readOnly />
                <Label htmlFor="estado">Estado</Label>
                <Input id="estado" placeholder="Estado" value={address.estado} readOnly />
                <Label htmlFor="numero">Número</Label>
                <Input id="numero" placeholder="Número" value={address.numero} onChange={(e) => setAddress({ ...address, numero: e.target.value })} />
              </div>
              <div className="flex justify-between">
                <Button onClick={handlePreviousStep} variant="outline" size="sm" className="mx-auto my-3">Anterior</Button>
              </div>
              <Button type="submit" className="mx-auto">Criar conta</Button>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col pb-4 gap-4 mx-auto">
          <span className="text-center text-sm">Já possui conta cadastrada?</span>
          <Link href={"/sign-in"} className="mx-auto">
            <Button variant="outline">Fazer login</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
