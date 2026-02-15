import Title from "../title";
import KnowItBlueCard from "./card";

export default function KnowItBlue() {
  return (
    <div className="w-full space-y-12 gap-[50px]"> 
        <div>
          <Title title="Our Line 🌿"  bgidDark={false}/>
        </div>

          <div className="flex flex-wrap gap-4 justify-center gap-[150px]">
            <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
            <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
            <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
            <KnowItBlueCard title="Sabonete Facial" src="/produtos/itblueproduto.png" hasButton={false}/>
        </div>
    </div>
  );
}