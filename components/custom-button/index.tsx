import { ReactNode } from "react";
import Link from "next/link";


type ButtomProps = {
    children: ReactNode;
    variant?: "primary" | "secundary";
    href: string;
}


export default function CustomButton
 ({children,
    variant = "primary",
    href="/"
    
 }: ButtomProps) {
    const variants = {
     primary: "text-center font-noto font-extrabold text-[#FFFFFF] bg-[#032B38] w-2/4 py-3 rounded-[15px] mt-2 text-[clamp(0.875rem,2.5vw,1.5rem)] hover:bg-[#085a6a]",
     secundary: "text-center font-noto font-extrabold text-[#FFFFFF] bg-[#06434F] w-full py-3 rounded-[10px] mt-2 text-[clamp(0.875rem,2.5vw,1.5rem)] hover:bg-[#085a6a]",
    };

  return (
    <Link href={href} className={variants[variant]}>
    {children}
    </Link>
  );
}