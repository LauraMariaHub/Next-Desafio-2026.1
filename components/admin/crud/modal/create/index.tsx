import CustomButton from "@/components/custom-button";
import FormCard from "@/components/form-card";
import Heading from "@/components/heading";



export default function CreateProduct(){
    return(
        <div className="
                        bg-[#ECF3F4] 
                        w-full 
                        aspect-square
                        max-w-[700px]
                        rounded-[12px]
                        p-5">
        
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Heading text="Cadastrar Produto" classNameText="font-playfair" textSize="1rem" />
                        <div className="h-[1px] w-full bg-gray-500"/>
                        <form action="" className="w-3/4">
                            <FormCard text="Nome" />
                            <FormCard text="Preço" />
                            <FormCard text="Descrição do Produto" maxheight="h-[200px]" isTextArea={true} />
                        </form>

                        <div className="flex flex-row items-center gap-3">
                            <CustomButton variant="danger" href="/"> Cancelar</CustomButton>
                            <CustomButton variant="success" href="/"> Salvar</CustomButton>
                        </div>

                    </div>
                </div>
        
    )
}