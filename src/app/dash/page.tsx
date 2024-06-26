import Layout from "@/components/layout/layout/layout";
import "./page.css";
import Image from "next/image";

export default function Dashboard() {
  return (
    <Layout
      children={
        <div id="Route" className="flex flex-col gap-4">
          <div id="Hero" className="flex items-center gap-6 w-full">
            <div>
              <Image
                alt="Logo pizzaria"
                width={122}
                height={122}
                src="/LogoPizzaria.jpg"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center items-start p-7 bg-white rounded-2xl w-full">
              <h1>
                Olá, Pizzaria Ditalia. Esperamos que hoje seja um ótimo dia de
                vendas!
              </h1>
              <span>Seja bem-vindo à dashboard da PedeTudo.online</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white rounded-2xl w-full flex flex-col items-center justify-center p-8">
              <span className="text-base font-bold text-roxoescuro">Você já finalizou</span>
              <h1 className="text-8xl font-normal p-8 text-salmao">57</h1>
              <span className="text-base font-bold text-roxoescuro">
                vendas utilizando nossas ferramentas!
              </span>
            </div>
            <div className="bg-white rounded-2xl w-full flex flex-col items-center justify-center p-8">
              <span className="text-base font-bold text-roxoescuro">Seu Chat Bot respondeu</span>
              <h1 className="text-8xl font-normal p-8 text-salmao">450</h1>
              <span className="text-base font-bold text-roxoescuro">clientes</span>
            </div>
          </div>
        </div>
      }
    />
  );
}
