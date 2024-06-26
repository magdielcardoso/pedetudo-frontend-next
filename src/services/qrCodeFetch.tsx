import axios from "axios"
import TenantFetch from "./tenantFetch";

export default async function QrCodeFetch () {

    const apiKey = "pedetudo.online"; 
    let sessionName: string;
    let sessionId: string;

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


    return {}
}