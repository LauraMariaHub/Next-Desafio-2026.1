import Title from "../title";
import KnowItBlueCard from "./card";

export default function KnowItBlue() {
  return (
    <div className="w-full space-y-12 gap-[50px]"> 
        <div>
          <Title title="Our Line 🌿"  bgidDark={false}/>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-items-center">
    <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
    <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
    <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
    <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
</div>
    </div>
  );
}