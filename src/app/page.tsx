import Image from "next/image";
import logo from "../../public/logo02.svg";

export default function Home() {
  return (
      <main className="flex flex-col h-screen items-center justify-between bg-white">
        <div className="mt-4 text-black/20">Em construção!</div>
        <div>
        <Image className="w-96" id="Logo01" src={logo} alt="logo" />
        </div>
        <div className="mb-4 text-black/20">Copyright © 2024 PedeTudo.online - Todos os direitos reservados</div>
      </main>
  );
}
