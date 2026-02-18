import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Página Inicial" },
  { href: "/products", label: "Produtos" },
  { href: "/login", label: "Login" },
  { href: "/contact", label: "Contato" },
  { href: "/gerenciamento", label: "Gerenciamento" },
];

export default function Header() {
  return (
    <header className="bg-white w-full h-20 px-[60px] shadow-md">
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

      </div>
    </header>
  );
}
