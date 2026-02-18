import ProductsCard from "./card";
import Image from "next/image";

export default function Products() {
    return (
        <div className="w-full h-fit gap-20px p-[1px]">
        <div className="flex flex-wrap gap-6 justify-center w-full p-4">
                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/>

                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/>

                <ProductsCard text="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 
            </div>

                        <Image 
                        src="/details/green-coconut.png"
                        width={500}
                        height={600}
                        alt="water background"
                         className="absolute -z-1 -left-20 -bottom-300 hidden lg:block rotate-x-180 opacity-65"
                        />
        </div>
    )
}