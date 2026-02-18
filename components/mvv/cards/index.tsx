type MVVCardProps = {
  text: string;
  description: string;
}

export default function MVVCard( {text, description}: MVVCardProps) {
  return (
    <div className="h-[250px] w-[270px] bg-[#C2D4DB] flex flex-col items-center justify-center gap-1 p-2 z-20">
        <h3 className= "font-playfair text-center font-extrabold text-[clamp(1.5rem,2.5vw,2.25rem)]">{text}</h3>
        <div className="w-full h-full">
        <p className="text-center text-[clamp(0.75rem,2.5vw,0.875rem)] text-semibold">{description}</p>
        </div>
    </div>
  );
}