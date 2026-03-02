import Heading from "@/components/heading"
import CustomButtom from "@/components/custom-button"
import { Product } from "@/types/data"

export default function ProductInfo({ product }: { product: Product }) {
    return (
        <div className="flex flex-col items-center gap-10 p-10 w-full md:w-[50%]">
            <Heading
                text={product.text}
                legend={product.description}
                textSize="3rem"
                minTextSize="2.25rem"
                classNameText="p-10 font-semibold font-playfair text-black"
                classNameLegend="font-roboto text-2xl text-black font-extralight" />

            <span className="font-urbanist font-extrabold text-center text-[#000000] text-[clamp(1.5rem,2.5vw,2.25rem)]">
                R$ {product.price}
            </span>

            <CustomButtom variant="primary" href={""}>
                Adicionar à Sacola
            </CustomButtom>

        </div>

    )
}