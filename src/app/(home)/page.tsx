import BestSellers from "@/components/best-sellers";
import HeroSection from "@/components/hero-section";
import CollectionItem from "@/components/collection-Item";
import MVV from "@/components/mvv";
import Products from "@/components/products";
import getBestSellers from "@/actions/home/actions";
import { fetchAllProducts } from "@/actions/admin/actions";

// app/page.tsx
export default async function Home() {
  const produto = await getBestSellers();
  
  // Aqui está o segredo: desestruture { products } do retorno da action
  const { products } = await fetchAllProducts(); 

  return (
    <div>
      <HeroSection />
      <div>
        {/* Agora 'products' é o array que o componente espera */}
        <CollectionItem products={products} />
        <MVV />
        <BestSellers produtos={produto}/>
      </div>
    </div>
  );
}