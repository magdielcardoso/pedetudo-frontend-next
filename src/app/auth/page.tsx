'use client'

import { Button } from "@/components/ui/button";
import "./page.css";
import logo from "../../../public/logo02.svg";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Auth() {

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/dash');
  };

  return (
    <main className="">
      <div id="Hero"></div>
      <div id="Form">
        <form id="FormDados">
          <Image id="Logo01" src={logo} alt="logo" />
          <h1>Acesse sua conta!</h1>
          <div id="SocialLogin">
            <Button variant={"ghost"}>
              <img
                className="socialIcons"
                src="https://cdn-icons-png.flaticon.com/256/2702/2702602.png"
                alt="google-icon"
              />
              Entrar com Google
            </Button>
            <Button variant={"ghost"}>
              <img
                className="socialIcons"
                src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-75-189796.png"
                alt="facebook-icon"
              />
              Entrar com Facebook
            </Button>
          </div>
          <h2>
            <span>Ou faça o login com seu e-mail</span>
          </h2>
          <div id="EmailLogin">
            <p>E-mail</p>
            <Input placeholder="Insira seu e-mail"></Input>
            <p>Senha</p>
            <Input placeholder="Insira sua senha"></Input>
            <p>Esqueceu sua senha?</p>
            <Button onClick={handleClick} id="LoginButton" className="text-white">
                Entrar
              <LogIn className="mr-2 h-4 w-4" />
            </Button>
          </div>
          <p id="CriarConta"> Não tem uma conta? Criar conta grátis </p>
        </form>
      </div>
    </main>
  );
}
