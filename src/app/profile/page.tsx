import Layout from "@/components/layout/layout/layout";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <Layout
      children={
        <div
          id="Canva"
          className="rounded-2xl bg-white flex flex-col gap-4 p-4"
        >
          <Image
            alt="Logo pizzaria"
            width={122}
            height={122}
            src="/LogoPizzaria.jpg"
            className="rounded-2xl"
          />
          <div id="Infos" className="flex flex-col gap-3 mt-4 pb-11 border-b-2 border-b-slate-300">
            <div className="flex">
              <h3 className="mr-4 mt-3 w-28">Nome da loja</h3>
              <input type="text" className="border rounded h-9 w-96" />
            </div>
            <div className="flex">
              <h3 className="mr-4 mt-3 w-28">CNPJ</h3>
              <input type="text" className="border rounded h-9 w-96" />
            </div>
            <div className="flex">
              <h3 className="mr-4 mt-3 w-28">Site</h3>
              <input type="text" className="border rounded h-9 w-96" />
            </div>
            <div className="flex">
              <h3 className="mr-4 mt-3 w-28">Instagram</h3>
              <input type="text" className="border rounded h-9 w-96" />
            </div>
          </div>
          <div className="flex items-center text-salmao">
            <Button className="flex gap-1" variant={"ghost"}>
              <LogOut />
              Logout
            </Button>
          </div>
        </div>
      }
    />
  );
}
