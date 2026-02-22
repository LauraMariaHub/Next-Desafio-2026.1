import Heading from "@/components/heading"
import CustomButtom from "@/components/custom-button"

export default function ProductInfo() {
    return(
        <div className="flex flex-col items-center justify-center gap-10 p-10 w-full md:w-[50%]">
            <Heading 
            text="Gel Clareador It Blue" 
            legend="Sua dose diária de luminosidade. 
            Este gel potente combina ativos clareadores de última geração para uniformizar a 
            textura e o tom da pele. Perfeito para quem busca um rosto revitalizado e livre de manchas, 
            mantendo a hidratação que a linha It Blue garante. 
            Resultado: Pele visivelmente mais homogênea e cheia de vida." 
            textSize="3rem" 
            minTextSize="2.25rem" 
            classNameText="font-semibold font-playfair text-black" 
            classNameLegend="font-roboto text-3xl text-black font-extralight"/>

            <CustomButtom variant="primary">
                Adicionar à Sacola
            </CustomButtom>

        </div>

    )
}