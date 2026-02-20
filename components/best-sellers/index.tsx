import Heading from "../heading";
import KnowItBlueCard from '@/components/know-itblue/card'
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
        <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
        <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true} />
      </div>
    </div>
  );
}