import FormCard from "@/components/form-card";
import Image from "next/image";
import Heading from "../heading";

export default function Contact() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">

            <div className="w-full flex flex-row items-center justify-center gap-4">
                <Image
                    src="/contato/faleconoscoicon.png"
                    alt="Logo da empresa"
                    width={70}
                    height={70}
                />
                <Heading text="Fale Conosco!" classNameText="font-playfair" textSize="3rem" />
            </div>

            <Image
                src="/details/water.png"
                width={500}
                height={600}
                alt="water background"
                className="absolute z-10 -left-65 top-20 hidden lg:block"
            />

            <form action="" className="w-3/5">
                <FormCard text="Nome" description="Digite seu nome" roundedActive={true} />
                <FormCard text="E-mail" description="Digite seu e-mail" roundedActive={true} />
                <FormCard text="Assunto" description="Digite O Motivo do Contato" roundedActive={true} />
                <FormCard text="Mensagem" description="Escreva detalhadamente sua dúvida ou motivaçao para contato." roundedActive={true} maxheight="h-[400px]" isTextArea={true} />
            </form>
        </div>
    )
}