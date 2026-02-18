import Heading from "../heading";
import MVVCard from "./cards";

export default function MVV() {
  return (
    <div className="w-full bg-black p-10">

        <div className="w-full pl-15 pr-15 justify-center items-center">
            <Heading text="Sobre Nós" legend="A It Blue é uma marca de 
            skincare desenvolvida para a pele contemporânea. Focamos em entregar 
            soluções eficazes — da hidratação profunda ao clareamento uniforme —
            com texturas leves e absorção inteligente. Nosso compromisso é com a 
            transparência e a performance, garantindo que cada gota do 
            seu ritual entregue exatamente o que a sua pele precisa para brilhar." bgDark={true}/>
        </div>
        
         <div className="flex flex-wrap justify-center gap-[150px] p-10">

            <MVVCard text="Missão" description="Proporcionar a vitalidade da hidratação 
            pura para todos os tipos de pele. Nossa missão é descomplicar o skincare unindo 
            a potência dos ativos naturais com a precisão da ciência, 
            criando rituais de autocuidado que renovam não apenas a pele, mas a autoestima."/>

            <MVVCard text="Visão" description="Ser reconhecida nacionalmente até 2028 como a referência em hidratação 
            inteligente e sustentável. Queremos liderar um movimento onde a beleza é fluida como a água: 
            transparente, acessível e essencial."/>

            <MVVCard text="Valores" description="Assim como a água limpa, não temos nada a esconder. 
            Nossas fórmulas são claras e nossos ingredientes são compreensíveis."/>

            
         </div>
    </div>
  );
}