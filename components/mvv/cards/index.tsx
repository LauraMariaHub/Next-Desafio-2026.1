import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","700","800"],
  variable: "--font-playfair",
});

type MVVCardProps = {
  title: string;
  description: string;
}

export default function MVVCard( {title, description}: MVVCardProps) {
  return (
    <div className="h-[250px] w-[270px] bg-[#C2D4DB] flex flex-col items-center justify-center gap-1 p-2">
        <h3 className= {`${playfair.className} text-center font-extrabold text-[clamp(1.5rem,2.5vw,2.25rem)]`}>{title}</h3>
        <div className="w-full h-full">
        <p className="text-center text-[clamp(0.75rem,2.5vw,0.875rem)] text-semibold">{description}</p>
        </div>
    </div>
  );
}