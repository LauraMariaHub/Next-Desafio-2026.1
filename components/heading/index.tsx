type HeadingProps = {
  text?: string;
  legend?: string;
  bgDark?: boolean;
  fontText?: string;
  minTextSize?: string;
  textSize?: string;
  legendSize?: string;
  legendAlign?: string;
  fontLegend?: string;
}

export default function Heading({ 
  text, 
  legend, 
  bgDark, 
  fontText, 
  minTextSize = "1.5rem",
  textSize = "1.87rem", 
  legendSize = "text-base", 
  legendAlign = "text-center",
  fontLegend }: HeadingProps) {

  const bgColor = bgDark ? "text-[#BCD2DE]" : "text-[#06434F]";

  return (
    <div className="flex flex-col justify-center items-center mt-6 gap-3">
      <h1 className={`font-semibold ${bgColor} ${fontText}`}
        style={{ fontSize: `clamp(${minTextSize}, 4vw, ${textSize})` }}
      >{text}</h1>
      <span className={`${bgColor} ${legendAlign} ${fontLegend} ${legendSize}`}>{legend}</span>
    </div>

  );
}