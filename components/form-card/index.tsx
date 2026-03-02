// form-card.tsx
import { UseFormRegister } from "react-hook-form";

type FormCardProps = {
    name?: string;
    register?: UseFormRegister<any>;
    error?: string;
    text?: string;
    description?: string;
    roundedActive?: boolean;
    maxheight?: string;
    value?: string | number;
    readonly?: boolean;
    isTextArea?: boolean;
}

export default function FormCard({
    name,
    register,
    error,
    text,
    description,
    roundedActive,
    maxheight,
    value,
    readonly,
    isTextArea
}: FormCardProps) {

    const rounded = roundedActive ? "rounded-[30px]" : "rounded-[10px]";

    const baseStyles = `
        placeholder:font-playfair
        placeholder:text-[clamp(0.75rem,20vw,1rem)] 
        w-full 
        p-2 
        border-2 
        ${error ? "border-red-500" : "border-gray-300"} 
        ${rounded} 
        ${readonly ? "text-[#06434F] font-montserrat font-semibold cursor-default bg-gray-50" : "bg-white"}
        ${maxheight || "h-auto"}
    `;


    const inputProps = (register && name)
        ? register(name)
        : { name, defaultValue: value };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full items-start p-3">
                <h1 className="font-playfair text-sm">{text}</h1>
            </div>

            {isTextArea ? (
                <textarea
                    {...inputProps}
                    placeholder={description}
                    readOnly={readonly}
                    className={`${baseStyles} resize-none`}
                />
            ) : (
                <input
                    {...inputProps}
                    type="text"
                    placeholder={description}
                    readOnly={readonly}
                    className={baseStyles}
                />
            )}

            {error && <p className="text-red-500 text-xs mt-1 self-start ml-4">{error}</p>}
        </div>
    )
}