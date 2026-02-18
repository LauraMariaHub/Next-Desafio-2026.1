type HeadingProps = {
    text?: string;
    legend?: string;
    bgDark?: boolean;
    font?:string;
    textSize?: string;
    legendSize?: string;
}

export default function Heading({ text, legend, bgDark, font, textSize, legendSize }: HeadingProps) {

    const bgColor = bgDark ? "text-[#BCD2DE]" : "text-[#06434F]";

  return (
    <div className="flex flex-col justify-center items-center mt-6 gap-3">
        <h1 className={`text-3xl font-semibold ${bgColor} ${font}`}
        style={{ fontSize: `clamp(1.5rem, 4vw, ${textSize})`}}
        >{text}</h1>
        <span className={`text-base ${bgColor} text-center ${font} ${legendSize}`}>{legend}</span>
    </div>

  );
}