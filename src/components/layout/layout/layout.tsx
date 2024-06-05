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
      <header>
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
              href=""
              className="flex items-center font-bold gap-2"
            >
              <Home />
              Home
            </Link>
            <Link
              id="LinkItem"
              href=""
              className="flex items-center font-bold gap-2"
            >
              <Settings />
              Configurações
            </Link>
            <span>Serviços</span>
            <Link
              id="LinkItem"
              href=""
              className="flex items-center font-medium gap-2"
            >
              <Bot />
              Chat Bot
            </Link>
            <Link
              id="LinkItem"
              href=""
              className="flex items-center font-medium gap-2"
            >
              <ClipboardList />
              Pedidos
            </Link>
            <span>Meu negócio</span>
            <Link
              id="LinkItem"
              href=""
              className="flex items-center font-medium gap-2"
            >
              <Store />
              Minha Loja
            </Link>
            <Link
              id="LinkItem"
              href=""
              className="flex items-center font-medium gap-2"
            >
              <ShoppingCart />
              Produtos
            </Link>
          </div>
          <div id="Screen">{children}</div>
        </div>
      </header>
    </main>
  );
}
