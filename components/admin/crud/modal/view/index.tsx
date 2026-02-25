import FormCard from "@/components/form-card";
import Heading from "@/components/heading";
import { Product } from "@/types/data";
import Image from "next/image";


export default function ViewProduct({ products }: { products: Product | null }) {
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

                    <div className="w-full flex flex-col justify-center items-center gap-10 p-5">
                    <Image
                    src="/logo/Logoitblue.png"
                    alt="Logo da empresa"
                    width={200}
                     height={200}
                     className="rounded-[20px]"
                    />
                    </div>

                    <FormCard 
                    text="Nome" 
                    value={products.text}
                    readonly={true} />

                    <FormCard 
                    text="Preço" 
                    value={products.price}
                    readonly={true} />

                    <FormCard 
                    text="Descrição do Produto" 
                    maxheight="h-[300px]"
                    isTextArea={true} 
                    value={products.description}
                    readonly={true} />

                </form>
            </div>
        </div>

    )
}
