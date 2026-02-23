import CustomButton from "@/components/custom-button";
import FormCard from "@/components/form-card";
import Heading from "@/components/heading";

const product = {nome: "Água Micelar", preco: "R$19,90", descricao: "Água Micelar"}


export default function ViewProduct() {
    return (
        <div className="
        bg-[#ECF3F4] 
        w-full 
        aspect-square
        max-w-[700px]
        rounded-[12px]
        p-5">

            <div className="flex flex-col items-center justify-center gap-2">
                <Heading text="Visualizar Produto" classNameText="font-playfair" textSize="1rem" />
                <div className="h-[1px] w-full bg-gray-500" />

                <form action="" className="w-3/4">

                    <FormCard 
                    text="Nome" 
                    value={product.nome}
                    readonly={true} />

                    <FormCard 
                    text="Preço" 
                    value={product.preco}
                    readonly={true} />

                    <FormCard 
                    text="Descrição do Produto" 
                    maxheight="h-[300px]"
                    isTextArea={true} 
                    value={product.descricao}
                    readonly={true} />

                </form>
            </div>
        </div>

    )
}
