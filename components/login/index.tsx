import FormCard from "../form-card";
import Heading from "../heading";

export default function Login() {
    return(
        <div className="bg-[#ECF3F4] 
                        w-[50%] 
                        aspect-square
                        max-w-[700px]
                        rounded-[12px]">

        <div className="flex flex-col items-center justify-center gap-8 p-10">
            <Heading text="ENTRAR" font="font-playfair" textSize="3.75rem"/>
            <FormCard description="Nome" maxwidth="w-3/4"/>
            <FormCard description="E-mail" maxwidth="w-3/4"/>
            <FormCard description="Senha" maxwidth="w-3/4"/>
            <Heading legend="Recuperar senha" font="font-playfair"/>
        </div>
        </div>
        )}