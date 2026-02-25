import ProductInfo from "./productinfo";
import ProductGallery from "./productgallery";
import Image from "next/image";
import { ProductIndividualPost } from "@/types/data";

export default function ProductDetails({product}: {product: ProductIndividualPost}) {
  
  if (!product) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 p-2">
        <ProductGallery imageUrl={product.imageUrl} />
        <ProductInfo product={product} />

        <Image
          src="/details/green-coconut.png"
          width={350}
          height={350}
          alt="water background"
          className="absolute -z-10 -right-20 top-150 rotate-180 hidden 2xl:block"
        />
        
    </div>
  );
}