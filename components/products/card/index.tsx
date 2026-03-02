import Image from "next/image";
import CustomButtom from "../../custom-button";


type ProductsCardProps = {
  id: number;
  text: string;
  description?: string;
  preco?: string;
  src: string;
}

export default function ProductsCard({ id, text, description, preco, src }: ProductsCardProps) {
  return (

    <div className="flex flex-col  w-[clamp(350px,20vw,450px)]  items-center p-8 border-[1px] border-[#06434F] mt-16">

      <div className="relative w-[244px] h-[300px] overflow-hidden">
        <Image
          src={src}
          alt={text}
          width={244}
          height={194}
          className="object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-5 mt-20">
        <h3 className="font-playfair font-semibold text-3xl text-center text-black min-h-[4rem] flex items-center">
          {text}
        </h3>

        <p className="font-urbanist font-thi text-center text-[clamp(0.75rem,2.5vw,0.875rem)] line-clamp-4">
          {description}
        </p>

        <span className="font-urbanist font-extrabold text-center text-[#000000] text-[clamp(1.5rem,2.5vw,2.25rem)]">
          {preco}
        </span>

        <CustomButtom variant="secundary" href={`/product-details/${id}`}>
          Saber Mais...
        </CustomButtom>
      </div>
    </div>
  );
}