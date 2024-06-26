import { Bell, Search } from "lucide-react";
import "./topmenu.css";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import logo from "../../../../public/Icon_Laranja.svg";
import Image from "next/image";

export default function Topmenu() {
    return (
        <div id="TopMenu" className="min-h-14 flex items-center justify-between">
            <Image className="w-8 cursor-pointer" id="LogoPT" src={logo} alt="logo" />
            <div className="Icons flex flex-row gap-2 items-center">
                <Search className="cursor-pointer"/>
                <Bell className="cursor-pointer"/>
                <Avatar className="cursor-pointer">
                    <AvatarImage src="/LogoPizzaria.jpg" alt="profile photo" />
                    <AvatarFallback>PT</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}