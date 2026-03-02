import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secundary" | "success" | "danger";
    href?: string; // Agora é opcional
    type?: "button" | "submit" | "reset"; // Tipagem correta para botões
    className?: string; // Caso queira passar algo extra
}

export default function CustomButton({
    children,
    variant = "primary",
    href,
    type = "button",
}: ButtonProps) {

    // Estilos base comuns a todos
    const baseClass = "text-center font-noto font-extrabold transition-colors mt-2";

    const variants = {
        primary: `${baseClass} text-[#FFFFFF] bg-[#032B38] w-2/4 py-3 rounded-[15px] text-[clamp(0.875rem,2.5vw,1.5rem)] hover:bg-[#085a6a]`,
        secundary: `${baseClass} text-[#FFFFFF] bg-[#06434F] w-full py-3 rounded-[10px] text-[clamp(0.875rem,2.5vw,1.5rem)] hover:bg-[#085a6a]`,
        success: `${baseClass} text-[#DAF3FE] bg-[#032B38] px-7 py-2 rounded-[15px] text-[clamp(0.75rem,2.5vw,1rem)] hover:opacity-90`,
        danger: `${baseClass} text-[#DAF3FE] bg-[#FF1100] px-4 py-2 rounded-[15px] text-[clamp(0.75rem,2.5vw,1rem)] hover:bg-[#DC3226]`,
    };

    // LÓGICA: Se tiver 'href', renderiza Link. Se não tiver, renderiza button.
    if (href) {
        return (
            <Link href={href} className={variants[variant]}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={variants[variant]}>
            {children}
        </button>
    );
}