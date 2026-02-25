import ProductsCard from "./card";
import Image from "next/image";
import { Product } from "@/types/data"
import Pagination from "../pagination";


export default function Products({ produtos = [], totalPages, currentPages }: { produtos: Product[], totalPages:number, currentPages: number }) {
    return (
        <div className="w-full h-fit gap-20px p-[1px] flex flex-col items-center">
            <div className="flex flex-wrap gap-6 justify-center w-full p-4">
            {produtos.map((produto) => (
            <ProductsCard
              key={produto.id}
              id={produto.id}
              text={produto.text}
              preco={`R$ ${produto.price.toFixed(2)}`}
              src={produto.imageUrl ?? "/produtos/itblueproduto.png"}
            />
            ))}

            </div>

            {totalPages > 1 && (
                 <Pagination totalPages={totalPages} currentPage={currentPages} />
            )}

            <Image
                src="/details/green-coconut.png"
                width={500}
                height={600}
                alt="water background"
                className="absolute -z-1 -left-20 -bottom-300 hidden lg:block rotate-x-180 opacity-65"
            />
        </div>
    )
}