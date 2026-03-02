import CustomButton from "@/components/custom-button";
import FormCard from "@/components/form-card";
import Heading from "@/components/heading";
import Image from "next/image";
import { Product } from "@/types/data"
import { updateProduct } from "@/actions/admin/actions";


export default function EditProduct({ product }: { product: Product }) {
    const updateProductWithId = updateProduct.bind(null, product?.id)

    return (

        <div className="
        bg-[#ECF3F4] 
        w-full 
        aspect-square
        max-w-[700px]
        rounded-[12px]
        p-5">

            <div className="flex flex-col items-center justify-center gap-4">
                <Heading text="Editar Produto" classNameText="font-playfair" textSize="1rem" />
                <div className="h-[1px] w-full bg-gray-500" />

                <form action={updateProductWithId} className="w-3/4">

                    <div className="w-full flex flex-col justify-center items-center gap-10 p-5">
                        <Image
                            src="/logo/Logoitblue.png"
                            alt="Logo da empresa"
                            width={200}
                            height={200}
                            className="rounded-[20px]"
                        />

                        <input
                            type="file"
                            className=" file:mr-4 file:rounded- file:border-0 file:bg-[#06434F] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#aeeadd] hover:file:bg-[#2b5d67]"
                        />
                    </div>


                    <FormCard
                        name="name"
                        text="Nome"
                        value={product.text}
                        readonly={false} />

                    <FormCard
                        name="price"
                        text="Preço"
                        value={product.price}
                        readonly={false} />

                    <FormCard
                        name="description"
                        text="Descrição do Produto"
                        isTextArea={true}
                        value={product.description}
                        maxheight="h-[300px]"
                        readonly={false} />

                    <div className="w-full flex justify-center items-center gap-3">
                        <CustomButton variant="success" type="submit"> Salvar</CustomButton>
                    </div>
                </form>
            </div>
        </div>

    )
}
