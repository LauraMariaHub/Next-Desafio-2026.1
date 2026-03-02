"use client";
import FormCard from "@/components/form-card";
import CustomButtom from "@/components/custom-button";
import Image from "next/image";
import Heading from "../heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValue } from "@/src/schema/form";

export default function Contact() {


    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            assunto: "",
            mensagem: "",
        }
    })


    const OnSubmit = async (data: FormValue) => {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            reset()
        } else {
            console.error("Erro ao enviar mensagem");
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">

            <div className="w-full flex flex-row items-center justify-center gap-4">
                <Image
                    src="/contato/faleconoscoicon.png"
                    alt="Logo da empresa"
                    width={70}
                    height={70}
                    style={{ height: 'auto' }}
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

            <form onSubmit={handleSubmit(OnSubmit)} className="w-3/5">
                <FormCard text="Nome" name="name" register={register} error={errors.name?.message} description="Digite seu nome" roundedActive={true} />
                <FormCard text="E-mail" name="email" register={register} error={errors.email?.message} description="Digite seu e-mail" roundedActive={true} />
                <FormCard text="Assunto" name="assunto" register={register} error={errors.assunto?.message} description="Digite O Motivo do Contato" roundedActive={true} />
                <FormCard text="Mensagem" name="mensagem" register={register} error={errors.mensagem?.message} description="Escreva detalhadamente sua dúvida ou motivaçao para contato." roundedActive={true} maxheight="h-[400px]" isTextArea={true} />

                <div className="w-full p-7 flex justify-center">
                    <CustomButtom variant="primary" type="submit">
                        Enviar
                    </CustomButtom>
                </div>
            </form>

            <div className="relative w-full max-w-[800px] h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-[#BCD2DE]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.034236878154!2d31.137540573893933!3d29.97549404836742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f62a3aea979%3A0xc9d3f0a64066bda9!2sGrande%20Esfinge%20de%20Giz%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1772406050958!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <Image
                src="/contato/contato.png"
                alt="Contato"
                width={200}
                height={96} />


        </div>
    )
}