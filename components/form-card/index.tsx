type FormCardProps = {
    text?: string;
    description?: string;
    roundedActive?: boolean;
    maxheight?: string;
    maxwidth?: string;
    value?: string | number;
    readonly?: boolean;
    isTextArea?: boolean; // Nova prop para decidir o tipo
}

export default function FormCard({ 
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
        border-gray-300 
        ${rounded} 
        ${readonly ? "text-[#06434F] font-montserrat font-semibold cursor-default bg-gray-50" : "bg-white"}
        ${maxheight || "h-auto"}
    `;

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full items-start p-2">
                <h1 className="font-playfair text-sm">{text}</h1>
            </div>

            {isTextArea ? (
                <textarea
                    placeholder={description}
                    defaultValue={value}
                    readOnly={readonly}
                    className={`${baseStyles} resize-none`} 
                />
            ) : (
                <input 
                    type="text" 
                    placeholder={description}
                    defaultValue={value}
                    readOnly={readonly}
                    className={baseStyles}
                />
            )}
        </div>
    )
}