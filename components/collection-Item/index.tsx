import Heading from "../heading";
import CompactCard from "../compact-product-card";
import SwiperComponent from "../SwiperComponent";

export default function CollectionItem() {
  return (
    <div className="w-full space-y-12 gap-[50px]">
      <div>
        <Heading text="Coleção Completa 🌿" bgDark={false} />
      </div>

      <div className="w-full">
        <SwiperComponent paginationActive={false}>
          <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
          <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
          <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
          <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
          <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
        </SwiperComponent>
      </div>
    </div>
  );
}