import Layout from "@/components/layout/layout/layout";
import "./page.css";


export default function Config() {
  return (
    <Layout
      children={
        <div id="Route" className="flex gap-4">
          <div id="minhaloja">
            <h1>Métricas e dados referentes ao seu negócio</h1>
            <span>Acompanhe em tempo real o crescimento da sua loja.</span>
          </div>
        </div>
      }
    />
  );
}
