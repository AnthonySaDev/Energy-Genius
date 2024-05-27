'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export function SignUpForm() {
 
  const [accountType, setAccountType] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState({
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    numero: '',
  });
  const [step, setStep] = React.useState(1);

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
              numero: data.numero
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

 

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>Preencha os dados abaixo para criar sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {step === 1 && (
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Seu email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="**********" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <Input id="confirmPassword" type="password" placeholder="**********" />
              </div>
              <div className="flex flex-col space-y-1.8">
                <Label htmlFor="accountType">Tipo de conta:</Label>
                <Select onValueChange={handleAccountTypeChange}>
                  <SelectTrigger id="accountType">
                    <SelectValue placeholder="CPF / CNPJ" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cpf">CPF</SelectItem>
                    <SelectItem value="cnpj">CNPJ</SelectItem>
                  </SelectContent>
                </Select>
                {accountType === 'cpf' && (
                <div className="flex flex-col space-y-1.5 mt-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="Seu CPF" />
                </div>
              )}
                  {accountType === 'cnpj' && (
                <div className="flex flex-col space-y-1.5 mt-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="Seu CNPJ" />
                  <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                  <Input id="nomeFantasia" placeholder="Nome fantasia da empresa" />
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
              <div className="flex justify-between">
                <Button onClick={handlePreviousStep} variant="outline" size="sm" className="mx-auto my-3">Anterior</Button>
              </div>
              </div>
                <Button className="mx-auto">Criar conta</Button>
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


