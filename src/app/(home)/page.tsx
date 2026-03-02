import BestSellers from "@/components/best-sellers";
import HeroSection from "@/components/hero-section";
import CollectionItem from "@/components/collection-Item";
import MVV from "@/components/mvv";
import Products from "@/components/products";
import getBestSellers from "@/actions/home/actions";
import { fetchAllProducts } from "@/actions/admin/actions";

export default async function Home() {
  const produto = await getBestSellers();

  const { products } = await fetchAllProducts();

  return (
    <div>
      <HeroSection />
      <div>
        {}
        <CollectionItem products={products} />
        <MVV />
        <BestSellers produtos={produto} />
      </div>
    </div>
  );
}