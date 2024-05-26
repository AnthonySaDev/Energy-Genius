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
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>Preencha os dados abaixo para criar sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome completo" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Seu email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Senha</Label>
              <Input id="name" placeholder="**********" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Confirme sua senha</Label>
              <Input id="name" placeholder="**********" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="accountType">Tipo de conta:</Label>
              <Select>
                <SelectTrigger id="accountType">
                  <SelectValue placeholder="CPF / CNPJ" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="astro">CPF</SelectItem>
                  <SelectItem value="nuxt">CNPJ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="mx-auto">Criar conta</Button>
      </CardFooter>
      <div className="flex flex-col pb-4 gap-4">
          <span className="text-center text-sm">Já possui conta cadastrada?</span>
          <Link href={"/sign-in"} className="mx-auto" >
            <Button variant="outline">Fazer login</Button>
          </Link>
        </div>
    </Card>
  )
}
