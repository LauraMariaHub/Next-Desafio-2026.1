type TitleProps = {
    title: string;
    legend?: string;
    bgidDark?: boolean;
    font?:string;
}

export default function Title({ title, legend, bgidDark, font }: TitleProps) {

    const bgColor = bgidDark ? "text-[#BCD2DE]" : "text-[#06434F]";

  return (
    <div className="flex flex-col justify-center items-center mt-6 gap-3">
        <h1 className={`text-3xl font-semibold ${bgColor} ${font}`}>{title}</h1>
        <span className={`text-base ${bgColor} text-center`}>{legend}</span>
    </div>

  );
}