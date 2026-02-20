"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const links = [
  { href: "/", label: "Página Inicial" },
  { href: "/products", label: "Produtos" },
  { href: "/login", label: "Login" },
  { href: "/contact", label: "Contato" },
  { href: "/gerenciamento", label: "Gerenciamento" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => { 
    setIsOpen(!isOpen);
    };


  return (
    <header className="relative bg-white w-full h-20 px-[60px] shadow-md  z-50">
      <div className="flex items-center justify-between h-full">
        
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Logoitblue.png"
            alt="Logo da empresa"
            width={96}
            height={80}
          />
        </Link>

        <nav>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-black hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={toggleNav}> {isOpen ? <X className="text-[#5FAD89] size-8"/> : <Menu className="text-[#5FAD89] size-8"/>} 
            </button>
          </div>

        {isOpen && ( 
          <div className="absolute bg-[#06434F] flex flex-col items-center gap-8 p-2 top-20 right-0 w-[40%] rounded-1xl md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className=" text-base text-[#F5F5F5] hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

        )}

      </div>
    </header>
  );
}
