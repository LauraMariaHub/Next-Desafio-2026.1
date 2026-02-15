import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


type KnowItBlueCardProps = {
  title: string;
  description?: string;
  preco?: string;
  src: string;
  hasButton: boolean;
}

export default function KnowItBlueCard({ title, description, preco, src, hasButton}: KnowItBlueCardProps) {
  
    const button = hasButton ? <button className={`${playfair.className} text-[#FFFFFF] bg-black w-full h-full rounded-[30px] text-[12px] `}>
              Comprar
          </button> : null;

    return (
        <div className="flex flex-col items-center justify-center">
        <Image
        src={src}
        alt={title}
        width={122}
        height={164}    
        />


        <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-10">
        <h3 className={`${playfair.className} text-regular text-sm text-center`}>{title}</h3>
        <h3 className={`${playfair.className} text-regular text-sm text-center`}>{preco}</h3>
        
        <div className="items-center justify-center h-[33px]"></div>
        {button}
        <div>

        </div>
        </div>
        </div>
  );
}