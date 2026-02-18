import Heading from "../heading";
import KnowItBlueCard from '@/components/know-itblue/card'


export default function BestSellers() {
  return (
    <div className="w-full space-y-12 gap-[50px]"> 
        <div>
          <Heading text="Os Mais Vendidos"  bgDark={false}/>
        </div>

          <div className="flex flex-wrap gap-[150px] justify-center">
            <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard text="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
        </div>
    </div>
  );
}