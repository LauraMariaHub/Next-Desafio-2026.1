import Heading from "../heading";
import CompactCard from '@/components/compact-product-card'
import Image from "next/image";

export default function BestSellers() {
  return (
    <div className="w-full space-y-12 gap-[50px] overflow-hidden relative">
      <div>
        <Heading text="Os Mais Vendidos" bgDark={false} />
      </div>

      <Image
        src="/details/water.png"
        width={350}
        height={300}
        alt="water background"
        className="absolute -z-1 -right-20 top-7 hidden lg:block"
      />


      <div className="flex flex-wrap gap-[150px] justify-center">
        <CompactCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <CompactCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <CompactCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <CompactCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
      </div>
    </div>
  );
}