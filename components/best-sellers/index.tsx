import Heading from "../heading";
import CompactCard from '@/components/compact-product-card'
import Image from "next/image";
import SwiperComponent from "../SwiperComponent";
import { Product } from "@/types/data";


type BestSellersProps = {
  produtos:Product[]
}


export default function BestSellers({produtos}:BestSellersProps) {

  return (
    <div className="w-full space-y-12 gap-[50px] overflow-hidden relative py-10">
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


      <div className="hidden md:flex md:flex-wrap md:gap-[150px] md:justify-center">
        {produtos.map((produto) => (
            <CompactCard
              key={produto.id}
              id={produto.id}
              text={produto.text}
              preco={`R$ ${produto.price.toFixed(2)}`}
              src={produto.imageUrl ?? "/produtos/itblueproduto.png"}
              hasButton={true}
            />
            ))}
      </div>

     <div className="block md:hidden mt-10"> 
        <SwiperComponent paginationActive={false}>
          {produtos.map((produto) => (
            <CompactCard
              key={produto.id}
              id={produto.id}
              text={produto.text}
              preco={`R$ ${produto.price.toFixed(2)}`}
              src={produto.imageUrl ?? "/produtos/itblueproduto.png"}
              hasButton={true}
            />
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
}