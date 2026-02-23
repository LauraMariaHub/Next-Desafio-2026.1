import { ReactNode } from "react";
import Link from "next/link";


type ButtomProps = {
    children: ReactNode;
    variant?: "primary" | "secundary" | "success" | "danger";
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
     success: "text-center font-noto font-extrabold text-[#DAF3FE] bg-[#032B38] px-7 py-2 rounded-[15px] mt-2 text-[clamp(0.75rem,2.5vw,1rem)] hover:bg-[#032B38]",
     danger:"text-center font-noto font-extrabold text-[#DAF3FE] bg-[#FF1100] px-4 py-2 rounded-[15px] mt-2 text-[clamp(0.75rem,2.5vw,1rem)] hover:bg-[#DC3226]",
    };
  return (
    <Link href={href} className={variants[variant]}>
    {children}
    </Link>
  );
}