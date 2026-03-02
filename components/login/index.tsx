import CustomButtom from "../custom-button";
import FormCard from "../form-card";
import Heading from "../heading";

export default function Login() {
    return (
        <div className="contents 
                        lg:block
                        lg:bg-[#ECF3F4] 
                        lg:w-[50%] 
                        lg:aspect-square
                        lg:max-w-[700px]
                        lg:rounded-[12px]
                        pt-22">

            <div className="flex flex-col items-center justify-center  p-10">
                <Heading text="ENTRAR" classNameText="font-playfair" textSize="3.75rem" />
                <form action="" className="w-3/4">
                    <FormCard description="Nome" />
                    <FormCard description="E-mail" />
                    <FormCard description="Senha" />
                    <Heading legend="Recuperar senha" classNameLegend="font-playfair p-5" />

                    <div className="flex w-full justify-center items-center p-5">
                        <CustomButtom variant="primary" href="/admin">
                            Entrar
                        </CustomButtom>
                    </div>

                </form>
            </div>

        </div>
    )
}