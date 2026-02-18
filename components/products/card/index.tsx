import Image from "next/image";
import { Playfair_Display, Noto_Serif, Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400","700","800"]
});

const noto = Noto_Serif({
  subsets: ['latin'],
  weight: ['400','700','800']
});

type ProductsCardProps = {
  text: string;
  description?: string;
  preco?: string;
  src: string;
}

export default function ProductsCard({ text, description, preco, src }: ProductsCardProps) {
  return (

    <div className="flex flex-col h-[650px)] w-[clamp(350px,20vw,450px)]  items-center p-8 border-[1px] border-[#06434F] mt-16">
      
      <div className="">
        <Image
          src={src}
          alt={text}
          width={244}
          height={194}
          className="fit-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-5 mt-20">
        <h3 className= "font-playfair font-semibold text-3xl text-center text-[#06434F]">
          {text}
        </h3>
        
        <p className= "font-playfair font-regular text-base text-center text-[clamp(0.75rem,2.5vw,0.875rem)]">
          {description}
        </p>
        
        <span className={`${urbanist.className} font-extrabold text-center text-[#06434F] text-[clamp(1.5rem,2.5vw,1.875rem)]`}>
          {preco}
        </span>

        <button className={`${noto.className} font-extrabold text-[#FFFFFF] bg-[#06434F] w-full py-3 rounded-[15px] mt-2 text-[clamp(0.875rem,2.5vw,1.5rem)]`}>
          Saber Mais...
        </button>
      </div>
    </div>
  );
}