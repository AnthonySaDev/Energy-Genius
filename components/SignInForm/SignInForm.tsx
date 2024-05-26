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

export function SignInForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center gap-3">
        <CardTitle className="text-2xl  font-bold">Ficamos felizes por ter voltado!</CardTitle>
        <CardDescription>Faça login para ter acesso a sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="Seu e-mail:" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="Sua senha" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center">
        <Button className="mx-auto">Conectar</Button>
      </CardFooter>
        <div className="flex flex-col pb-4 gap-4">
          <span className="text-center text-sm">Não possui cadastro ainda?</span>
          <Link href={"/sign-up"} className="mx-auto" >
            <Button variant="outline">Crie uma conta</Button>
          </Link>
        </div>
    </Card>
  )
}
