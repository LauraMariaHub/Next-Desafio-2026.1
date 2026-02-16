import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export default function HeroSection() {
  return (
    <div className="w-full">
     <Image
            src="/banner/White Black Modern Natural Skincare Products Banner (2) 1.png"
            alt="Banner da empresa"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
    <div className="absolute bottom-0 
    h-[132px] w-[342px] 
    items-center justify-center 
    left-[50%] translate-x-[-50%]">
            <button className={`${playfair.className} text-[#06434F] bg-white w-full h-full rounded-[80px] text-[54px] `}>
              ADQUIRA
          </button>
    </div>

    </div>
  );
}