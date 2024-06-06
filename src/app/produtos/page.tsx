import Layout from "@/components/layout/layout/layout";
import "./page.css";


export default function Config() {
  return (
    <Layout
      children={
        <div id="Route" className="flex gap-4">
          <div id="produtos">
            <h1>Veja todos os produtos disponíveis na sua loja</h1>
            <span>Gerencie os produtos que aparecem para seus clientes.</span>
          </div>
        </div>
      }
    />
  );
}
