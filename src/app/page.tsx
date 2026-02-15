import BestSellers from "@/components/best-sellers";
import HeroSection from "@/components/hero-section";
import KnowItBlue from "@/components/know-itblue";
import MVV from "@/components/mvv";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <div className=" ">
    <KnowItBlue />
    <MVV />
    <BestSellers/>
    </div>
    
  </div>


  );
}
