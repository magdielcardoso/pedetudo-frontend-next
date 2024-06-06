import Layout from "@/components/layout/layout/layout";
import "./page.css";
import Image from "next/image";
import qrcode from "../../../public/qrcode.svg";

export default function Dashboard() {
  return (
    <Layout
      children={
        <div className="flex flex-col">
          <div id="Route" className="flex gap-4">
            <div id="Code">
              <Image
                className="w-8 cursor-pointer"
                id="QRCode"
                src={qrcode}
                alt="qrcode"
              />
            </div>
            <div id="Infos" className="flex flex-col justify-center">
              <h1>Conecte o Whatsapp do seu negócio!</h1>
              <div id="Passos" className="flex flex-col">
                <span>1. Abra o Whatsapp no seu celular.</span>
                <span>
                  2. Toque em Mais opções no Android ou em Configurações no
                  iPhone.
                </span>
                <span>
                  3. Toque em Dispositivos conectados e, em seguida, em Conectar
                  dispositivo.
                </span>
                <span>
                  4. Aponte seu celular para esta tela para escanear o QRCode.
                </span>
              </div>
              <h2>
                Pronto! A plataforma irá iniciar o atendimento automaticamente
                sem
                <br /> necessidade de qualquer configuração!
              </h2>
            </div>
          </div>
          <div id="Copy">
            <h1>Atendimento rápido e prático na sua lanchonete?</h1>
            <span>
              Com um chatbot, você oferece agilidade nos pedidos, reduz filas e
              aumenta a satisfação dos clientes!
            </span>
          </div>
        </div>
      }
    />
  );
}
