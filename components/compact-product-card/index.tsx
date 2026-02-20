import Image from "next/image";

type CompactCardProps = {
  text: string;
  description?: string;
  preco?: string;
  src: string;
  hasButton: boolean;
}

export default function CompactCard({ text, description, preco, src, hasButton }: CompactCardProps) {

  const button = hasButton ? <button className="font-playfair text-[#FFFFFF] bg-black w-full h-full rounded-[30px] text-[12px]">
    Comprar
  </button> : null;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[150px] min-h-[250px]">

      <div className="relative aspect-square w-full">
      <Image
        src={src}
        alt={text}
        fill
        className="object-cover"
      />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-2 m-5">
        <h3 className="font-playfair text-regular text-sm text-center">{text}</h3>
        <h3 className="font-playfair text-regular text-sm text-center">{preco}</h3>

        <div className="items-center justify-center h-[33px]"></div>
        {button}
        <div>

        </div>
      </div>
    </div>
  );
}