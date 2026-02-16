import ProductsCard from "./card";

export default function Products() {
    return (
        <div className="w-full h-fit gap-[50px] p-[4px]">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/>

                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 

                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/>

                <ProductsCard title="Máscara Facial" description="O boost de hidratação que sua pele merece. 
                Tecnologia avançada para um rosto radiante, macio e protegido em apenas 15 minutos.
                 Essencial na sua rotina semanal." preco="R$ 99,90" src="/produtos/itblueproduto3.png"/> 
            </div>
        </div>
    )
}