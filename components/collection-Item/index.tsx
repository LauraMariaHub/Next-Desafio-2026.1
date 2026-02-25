import Heading from "../heading";
import CompactCard from "../compact-product-card";
import SwiperComponent from "../SwiperComponent";
import { Product } from "@/types/data";

type CollectionItemProps = {
  products:Product[]
}

export default function CollectionItem({products}:CollectionItemProps) {
  return (
    <div className="w-full space-y-12 gap-[50px] py-10">
      <div>
        <Heading text="Coleção Completa 🌿" bgDark={false} />
      </div>

      <div className="w-full">
        <SwiperComponent paginationActive={false}>
          {products.map((product) => (
          <CompactCard 
          key={product.id}
          text={product.text} 
          src={product.imageUrl ?? "/produtos/itblueproduto.png"} 
          hasButton={false} />
          
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
}