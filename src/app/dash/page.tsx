import Layout from "@/components/layout/layout/layout";
import "./page.css";


export default function Dashboard() {

  return (
    <Layout
      children={
        <div id="Route" className="flex gap-4">
          <div id="dash">
            <h1>Seja bem vindo à dashboard da PedeTudo.online</h1>
            <span>Em breve você verá as principais informações do seu negócio aqui.</span>
          </div>
        </div>
      }
    />
  );
}
