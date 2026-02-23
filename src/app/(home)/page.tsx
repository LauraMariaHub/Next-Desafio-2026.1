import BestSellers from "@/components/best-sellers";
import HeroSection from "@/components/hero-section";
import CollectionItem from "@/components/collection-Item";
import MVV from "@/components/mvv";
import Products from "@/components/products";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <div className=" ">
    <CollectionItem />
    <MVV />
    <BestSellers/>
    </div>
    
  </div>


  );
}
