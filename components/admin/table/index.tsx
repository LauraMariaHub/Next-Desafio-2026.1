import CustomButton from "@/components/custom-button";
import Image from "next/image";
import { EditButtom, ViewButtom, DeleteButtom, CreateButtom } from "./buttons-table";



export default function Table() {
  return (
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="w-full flex justify-end">
          <CreateButtom/>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-base text-left">
            <thead className="bg-[#DAF3FE] text-[#06434F]">
              <tr >
                <th className="px-6 py-3 font-playfair text-center">Imagem</th>
                <th className="px-6 py-3 font-playfair text-center">Nome</th>
                <th className="px-6 py-3 font-playfair text-center">Preço</th>
                <th className="px-6 py-3 font-playfair text-center">Descrição</th>
                <th className="px-6 py-3 font-playfair text-center">Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t text-white bg-[#BCD2DE]">
                <th className="p-4">
                    <div className="flex justify-center items-center">
                        <div className="relative aspect-square w-2/4">
                        <Image
                          src="/logo/Logoitblue.png"
                          alt="Logo empresa"
                          fill
                          className="object-cover rounded-[8px]"
                        />
                        </div>
                    </div>
                </th>
                <th className="px-6 py-4 text-center">Produto 1</th>
                <th className="px-6 py-4  text-center">R$ 50,00</th>
                <th className="px-6 py-4 text-center">Descrição exemplo</th>
                <th className="px-7 py-8 flex items-center justify-center gap-4"> 
                  <EditButtom id={1}/>
                  <ViewButtom id={1}/>
                  <DeleteButtom id={1}/>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}