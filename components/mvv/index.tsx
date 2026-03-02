import { getIdentities } from "@/src/lib/api/get.mvv";
import Heading from "../heading";
import MVVCard from "./cards";
import Image from "next/image";

interface Identity {
  id: string | number;
  title: string;
  text: string;
}

export default async function MVV() {
  const data: Identity[] = await getIdentities();

  return (
    <div className="w-full bg-black p-10 overflow-hidden">
      <div className="w-full pl-15 pr-15 justify-center items-center">
        <Heading 
          text="Sobre Nós" 
          legend="A It Blue é uma marca de skincare desenvolvida para a pele contemporânea..." 
          bgDark={true}
          classNameLegend="pl-20 pr-20 text-center" 
        />
      </div>

      <Image
        src="/details/water.png"
        width={600}
        height={600}
        alt="water background"
        className="absolute z-10 -left-90 top-290 hidden 2xl:block"
      />

      <div className="flex flex-wrap justify-center gap-[150px] p-10">
        {data.slice(0, 3).map((item) => (
          <MVVCard key={item.id} text={item.title} description={item.text} />
        ))}
      </div>
    </div>
  );
}