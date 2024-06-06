import Layout from "@/components/layout/layout/layout";
import "./page.css";


export default function Config() {
  return (
    <Layout
      children={
        <div id="Route" className="flex gap-4">
          <div id="pedidos">
            <h1>Veja e gerencie todos os pedidos do seu negócio</h1>
            <span>Acompanhe o status de entrega e a avaliação do cliente.</span>
          </div>
        </div>
      }
    />
  );
}
