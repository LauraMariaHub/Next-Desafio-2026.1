"use client"
import CustomButton from "@/components/custom-button";
import FormCard from "@/components/form-card";
import Heading from "@/components/heading";
import Image from "next/image";

import { createProductAction } from "@/actions/admin/actions"

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

                        <form action={createProductAction} className="w-3/4">


                        <div className="w-full flex flex-col items-center justify-center gap-4">
                        <label htmlFor="file-upload" className="cursor-pointer group relative">
                            <Image
                                src="/details/upload.png"
                                alt="Logo da empresa"
                                width={200}
                                height={200}
                                className="rounded-[20px] transition-opacity group-hover:opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-black/50 text-white text-xs p-2 rounded-lg">Trocar Imagem</span>
                            </div>
                        </label>

                        <input
                            name="image"
                            id="file-upload" 
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log("Arquivo selecionado:", file.name);
                                }
                            }}
                        />

                        <p className="text-xs text-gray-500 font-medium">Clique na imagem para alterar</p>
                    </div>

                            <FormCard name="name" text="Nome" />
                            <FormCard  name="price" text="Preço" />
                            <FormCard name="description" text="Descrição do Produto" maxheight="h-[200px]" isTextArea={true} />

                        <div className="flex flex-row justify-center gap-3 p-4">
                            <CustomButton variant="danger" href="/"> Cancelar</CustomButton>
                            <CustomButton variant="success" type="submit"> Salvar</CustomButton>
                        </div>

                        </form>
                    </div>
                </div>
        
    )
}