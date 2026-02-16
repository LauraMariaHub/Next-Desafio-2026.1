import { Search } from "lucide-react";

type SecondarySearchProps = {
  count?: number; 
};

export default function SecondarySearch({ count }: SecondarySearchProps) {
  return (
    <div className="w-full max-w-[600px] px-4 py-10">
      <div className="relative flex items-center w-full h-[60px]">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full h-full pl-8 pr-14 rounded-full border-2 border-black bg-transparent text-xl outline-none placeholder:text-gray-400 font-serif"
        />
        
        <div className="absolute right-6 flex items-center justify-center pointer-events-none">
          <Search 
            size={32} 
            className="text-[#06434F]" 
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
}