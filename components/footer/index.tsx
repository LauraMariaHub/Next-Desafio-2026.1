import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="
      bg-white
      w-full
      mt-24
      px-[60px]
      py-8
      min-h-[180px]
      flex
      items-center
      justify-between
    ">
      <Image
        src="/logo/Logoitblue.png"
        alt="Logo da empresa"
        width={96}
        height={80}
      />

      <div className="text-sm flex items-center gap-6">
        <Link href="#" className="hover:text-gray-500">
          Termos de Uso
        </Link>  

        <Link href="#" className="hover:text-gray-500">
          Política de Privacidade
        </Link>  

        <Link href="#" className="hover:text-gray-500">
          Nos contate
        </Link>

        <Image
          src="/contato/contato.png"
          alt="Contato"
          width={167}
          height={96}
        />
      </div>
    </div>
  );
}
