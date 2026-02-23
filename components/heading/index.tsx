type HeadingProps = {
  text?: string;
  legend?: string;
  bgDark?: boolean;
  classNameText?: string;
  classNameLegend?: string;
  minTextSize?: string;
  textSize?: string;
}

export default function Heading({ 
  text, 
  legend, 
  bgDark, 
  minTextSize = "1.5rem",
  textSize = "1.87rem", 
  classNameLegend = "text-base text-center",
  classNameText
  }: HeadingProps) {

  const bgColor = bgDark ? "text-[#BCD2DE]" : "text-[#06434F]";

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={`font-semibold ${bgColor} ${classNameText}`}
        style={{ fontSize: `clamp(${minTextSize}, 4vw, ${textSize})` }}
      >{text}</h1>
      <span className={`${bgColor} ${classNameLegend}`}>{legend}</span>
    </div>

  );
}