type FormCardProps = {
  text?: string;
  description?: string;
  roundedActive?: boolean;
  maxheight?: string;
  maxwidth?: string;
}

export default function FormCard({text,description, roundedActive,maxheight,maxwidth}: FormCardProps) {

    const rounded = roundedActive ? "rounded-[30px]" : "rounded-[10px]";
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <form action="" className={`${maxwidth}`}>
            <div className="w-full items-start p-2">
             <h1 className="font-playfair text-sm`">{text}</h1>
            </div>
                <input type="text" placeholder={description} 
                className=
                {`placeholder: font-playfair
                placeholder:text-[clamp(0.75rem,20vw,1rem)] 
                ${maxheight}
                w-full p-2 border-2 border-gray-300 ${rounded}`}/>
            </form>
        </div>
    )
}