import "./layout.css";
import {
  Bell,
  Bot,
  ClipboardList,
  Home,
  Search,
  Settings,
  ShoppingCart,
  Store,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../../../public/Icon_Laranja.svg";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <header className="flex-0">
        <div
          id="TopMenu"
          className="min-h-14 flex items-center justify-between"
        >
          <Image
            className="w-8 cursor-pointer"
            id="LogoPT"
            src={logo}
            alt="logo"
          />

          <h1 id="NomeNegocio" className="text-base">
            Pizzaria Sol & Lua
          </h1>
          <div className="Icons flex flex-row gap-2 items-center">
            <Search className="cursor-pointer" />
            <Bell className="cursor-pointer" />
            <Avatar className="cursor-pointer">
              <AvatarImage
                src="https://github.com/magdielcardoso.png"
                alt="profile photo"
              />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div id="Canva" className="flex">
          <div id="MenuLateral" className="flex flex-col gap-2">
            <Link
              id="LinkItem"
              href="/dash"
              className="flex items-center font-bold gap-2"
            >
              <Home />
              Dashboard
            </Link>
            <Link
              id="LinkItem"
              href="/config"
              className="flex items-center font-bold gap-2"
            >
              <Settings />
              Configurações
            </Link>
            <span>Serviços</span>
            <Link
              id="LinkItem01"
              href="/qrcode"
              className="flex items-center font-medium gap-2"
            >
              <Bot />
              Chat Bot
            </Link>
            <Link
              id="LinkItem"
              href="/pedidos"
              className="flex items-center font-medium gap-2"
            >
              <ClipboardList />
              Pedidos
            </Link>
            <span>Meu negócio</span>
            <Link
              id="LinkItem"
              href="/minhaloja"
              className="flex items-center font-medium gap-2"
            >
              <Store />
              Minha Loja
            </Link>
            <Link
              id="LinkItem"
              href="/produtos"
              className="flex items-center font-medium gap-2"
            >
              <ShoppingCart />
              Produtos
            </Link>
          </div>
          <div id="Screen" className="flex-1">
            {children}
          </div>
        </div>
      </header>
    </main>
  );
}
