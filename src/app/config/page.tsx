import Layout from "@/components/layout/layout/layout";
import "./page.css";


export default function Config() {
  return (
    <Layout
      children={
        <div id="Route" className="flex gap-4">
          <div id="config">
            <h1>Aqui você pode configurar seu sistema</h1>
            <span>Informações como nome do negócio, CNPJ e endereço comercial podem ser atualizadas nessa tela.</span>
          </div>
        </div>
      }
    />
  );
}
