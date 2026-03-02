import CustomButton from "@/components/custom-button";
import Image from "next/image";
import { EditButtom, ViewButtom, DeleteButtom, CreateButtom } from "./buttons-table";
import { Product } from "@/types/data";



export default function Table({ product, count }: { product: Product[], count: number }) {
  return (
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="w-full flex justify-end">
        <CreateButtom />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-base text-left">
          <thead className="bg-[#DAF3FE] text-[#06434F]">
            <tr >
              <th className="px-6 py-3 font-playfair text-center">Imagem</th>
              <th className="px-6 py-3 font-playfair text-center">Nome</th>
              <th className="px-6 py-3 font-playfair text-center">Preço</th>
              <th className="px-6 py-3 font-playfair text-center ">Descrição</th>
              <th className="px-6 py-3 font-playfair text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {product.map((product, index) => (
              <tr key={index} className="border-t text-white bg-[#BCD2DE]">
                <th className="p-4">
                  <div className="flex justify-center items-center">
                    <div className="relative aspect-square w-2/4">
                      <Image
                        src={product.imageUrl ?? "/logo/Logoitblue.png"}
                        alt="Logo empresa"
                        fill
                        className="object-cover rounded-[8px]"
                      />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-center">{product.text} 1</th>
                <th className="px-6 py-4  text-center">{product.price}</th>
                <th className="px-6 py-4 text-center line">{product.description}</th>
                <th className="px-7 py-8 flex items-center justify-center gap-4">
                  <EditButtom id={product?.id} />
                  <ViewButtom id={product?.id} />
                  <DeleteButtom id={product?.id} />
                </th>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}