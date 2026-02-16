import Image from "next/image";
import { Playfair_Display, Noto_Serif, Urbanist } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","700","800"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400","700","800"]
});

const noto = Noto_Serif({
  subsets: ['latin'],
  weight: ['400','700','800']
});

type ProductsCardProps = {
  title: string;
  description?: string;
  preco?: string;
  src: string;
}

export default function ProductsCard({ title, description, preco, src }: ProductsCardProps) {
  return (

    <div className="flex flex-col items-center p-8 w-full max-w-[508px] border-[1px] border-[#06434F] relative mt-16">
      
      <div className="absolute -top-20">
        <Image
          src={src}
          alt={title}
          width={244}
          height={194}
          className="object-contain"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-5 mt-20">
        <h3 className={`${playfair.className} font-semibold text-3xl text-center text-[#06434F]`}>
          {title}
        </h3>
        
        <p className={`${playfair.className} font-regular text-base text-center leading-snug px-2`}>
          {description}
        </p>
        
        <span className={`${urbanist.className} font-extrabold text-4xl text-center`}>
          {preco}
        </span>

        <button className={`${noto.className} font-extrabold text-[#FFFFFF] bg-[#06434F] w-full py-3 rounded-[15px] text-2xl mt-2`}>
          Saber Mais...
        </button>
      </div>
    </div>
  );
}