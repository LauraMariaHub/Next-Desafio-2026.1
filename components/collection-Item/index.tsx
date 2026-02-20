import Heading from "../heading";
import CompactCard from "../compact-product-card";

export default function CollectionItem() {
  return (
    <div className="w-full space-y-12 gap-[50px]">
      <div>
        <Heading text="Coleção Completa 🌿" bgDark={false} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-items-center">
        <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
        <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
        <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
        <CompactCard text="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false} />
      </div>
    </div>
  );
}