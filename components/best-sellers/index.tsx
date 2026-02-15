import Title from "../title";
import KnowItBlueCard from '@/components/know-itblue/card'


export default function BestSellers() {
  return (
    <div className="w-full space-y-12 gap-[50px]"> 
        <div>
          <Title title="Os Mais Vendidos"  bgidDark={false}/>
        </div>

          <div className="flex flex-wrap gap-4 justify-center gap-[150px]">
            <KnowItBlueCard title="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard title="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard title="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
            <KnowItBlueCard title="Creme Facial" preco="R$0,00" src="/produtos/itblueproduto2.png" hasButton={true}/>
        </div>
    </div>
  );
}