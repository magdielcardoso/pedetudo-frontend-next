"use client";
import Layout from "@/components/layout/layout/layout";
import "./page.css";
import Image from "next/image";
import qrcode from "../../../public/qrcode.svg";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";
import TenantFetch from "@/services/tenantFetch";
import { io } from "socket.io-client";
const socket = io("http://api.pedetudo.online:9090"); // Substitua pelo URL real do seu backend

export default function Dashboard() {
  const [statusQr, setStatusQr] = useState("Gerar QRCode");
  const [statusConnection, setStatusConnection] = useState("Desconectado");

  let sessionName: string;
  let sessionId: string;
  const apiKey = "pedetudo.online"; // Chave da API PedeTudo.Online

  async function tenantSessionId() {
    sessionName = (await TenantFetch()).nomeSessionTenant;
    sessionId = sessionName; // Define o valor de sessionId após obter sessionName
  }

  // Função para utilizar sessionName, sessionId e apiKey
  function useSessionAndApiKey() {
    console.log("Session Name:", sessionName);
    console.log("Session ID:", sessionId);
    console.log("API Key:", apiKey);
  }

  // Chame a função para definir o valor de sessionName e sessionId
  tenantSessionId().then(() => {
    console.log("Session ID dentro do then:", sessionId); // Verifica se o valor foi atribuído corretamente
    useSessionAndApiKey(); // Use sessionName, sessionId e apiKey
  });

  const handleLinkClick = async (event: { preventDefault: () => void }) => {
    try {
      const response = await axios.get(
        "http://api.pedetudo.online:9090/session/start/" + sessionId,
        {
          headers: { "x-api-key": apiKey },
        }
      );

      if (response.status === 200) {
        console.log("Sessão iniciada com sucesso!");
        io.on("connect", (socket) => {
          socket.on("whatsapp_authenticated", (sessionId) => {
            console.log(`Sessão do Whatsapp ${sessionId} autenticada`);
            // Execute as ações que você deseja realizar quando uma sessão for autenticada
          });
        });
        axios
          .post("http://api.pedetudo.online:8181/sessions", {
            id: "1",
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });

        console.log(response.data);

        setStatusQr("Gerando QRCode...");
        // Adicionar atraso de 3 segundos antes de buscar imagem do QRCode
        await new Promise((resolve) => setTimeout(resolve, 13000)); // 3000 milisegundos = 3 segundos

        // Buscar imagem do QRCode com axios
        const qrCodeImageResponse = await axios.get(
          "http://api.pedetudo.online:9090/session/qr/" + sessionId + "/image",
          {
            headers: { "x-api-key": apiKey },
            responseType: "blob",
          }
        );

        if (qrCodeImageResponse.status === 200) {
          const qrCodeImageBlob = qrCodeImageResponse.data; // Obter o blob da imagem
          const qrCodeImageURL = URL.createObjectURL(qrCodeImageBlob); // Converter o blob em URL

          // Atualizar a imagem do QRCode na tela
          document.getElementById("QRCode").src = qrCodeImageURL;
          setStatusQr("QRCode gerado com sucesso!");
        } else {
          setStatusQr("Erro ao buscar imagem do QRCode");
          console.error(
            "Erro ao buscar imagem do QRCode:",
            qrCodeImageResponse.status
          );
        }

        // ... (restante do código para tratar a resposta da imagem)
      } else {
        console.error("Erro ao iniciar sessão:", response.status);
      }
    } catch (error) {
      console.error("Erro geral:", error);
    }
  };

  // Layout
  return (
    <Layout>
      <div className="flex flex-col">
        <div id="Route" className="flex gap-4">
          <div id="Code" className="w-full">
            <Image
              className="w-8 cursor-pointer"
              id="QRCode"
              src={qrcode}
              alt="qrcode"
            />
          </div>
          <div id="Infos" className="flex flex-col justify-center w-full">
            <h1 id="StatusConnect">Conecte o Whatsapp do seu negócio!</h1>
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
              Pronto! A plataforma irá iniciar o atendimento automaticamente sem
              <br /> necessidade de qualquer configuração!
            </h2>
            <Button
              onClick={handleLinkClick}
              id="ConnectButton"
              className="text-white gap-1"
            >
              {statusQr}
              <Zap className="w-4" />
            </Button>
          </div>
          <div className="flex w-full justify-end font-medium ">
            <h3>{statusConnection}</h3>
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
    </Layout>
  );
}
