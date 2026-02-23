import CustomButton from "@/components/custom-button";
import FormCard from "@/components/form-card";
import Heading from "@/components/heading";

const product = {nome: "Água Micelar", preco: "R$19,90", descricao: "Água Micelar"}


export default function EditProduct() {
    return (

        <div className="
        bg-[#ECF3F4] 
        w-full 
        aspect-square
        max-w-[700px]
        rounded-[12px]
        p-5">

            <div className="flex flex-col items-center justify-center gap-2">
                <Heading text="Editar Produto" classNameText="font-playfair" textSize="1rem" />
                <div className="h-[1px] w-full bg-gray-500" />
                
                <form action="" className="w-3/4">
                    <FormCard 
                    text="Nome" 
                    value={product.nome}
                    readonly={false} />

                    <FormCard 
                    text="Preço" 
                    value={product.preco}
                    readonly={false} />

                    <FormCard 
                    text="Descrição do Produto" 
                    isTextArea={true} 
                    value={product.descricao}
                    maxheight="h-[300px]"
                    readonly={false} />

                </form>

                <div className="flex flex-row items-center gap-3">
                    <CustomButton variant="success" href="/"> Salvar</CustomButton>
                </div>

            </div>
        </div>

    )
}
