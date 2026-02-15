type TitleProps = {
    title: string;
    legend?: string;
    bgidDark?: boolean;
}

export default function Title({ title, legend, bgidDark }: TitleProps) {

    const bgColor = bgidDark ? "text-[#BCD2DE]" : "text-[#06434F]";

  return (
    <div className="flex flex-col justify-center items-center mt-6 gap-3">
        <h1 className={`text-3xl font-semibold ${bgColor}`}>{title}</h1>
        <span className={`text-base ${bgColor} text-center`}>{legend}</span>
    </div>

  );
}