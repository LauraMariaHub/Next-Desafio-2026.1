import Image from "next/image";

type KnowItBlueCardProps = {
  text: string;
  description?: string;
  preco?: string;
  src: string;
  hasButton: boolean;
}

export default function KnowItBlueCard({ text, description, preco, src, hasButton}: KnowItBlueCardProps) {
  
    const button = hasButton ? <button className= "font-playfair text-[#FFFFFF] bg-black w-full h-full rounded-[30px] text-[12px]">
              Comprar
          </button> : null;

    return (
        <div className="flex flex-col items-center justify-center">
        <Image
        src={src}
        alt={text}
        width={122}
        height={164}    
        />


        <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-10">
        <h3 className= "font-playfair text-regular text-sm text-center">{text}</h3>
        <h3 className= "font-playfair text-regular text-sm text-center">{preco}</h3>
        
        <div className="items-center justify-center h-[33px]"></div>
        {button}
        <div>

        </div>
        </div>
        </div>
  );
}