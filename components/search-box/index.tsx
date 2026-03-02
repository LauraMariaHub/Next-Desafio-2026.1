"use client";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Search() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [SearchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')
    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/products?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(SearchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
            <div className="w-full max-w-[600px] px-4 py-10">
                <div className="relative flex items-center w-full h-[60px]">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full h-full pl-8 pr-14 rounded-full border-2 border-black bg-transparent text-xl outline-none placeholder:text-gray-400 font-serif"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-6 flex items-center justify-center pointer-events-none">
                        <SearchIcon
                            size={32}
                            className="text-[#06434F]"
                            strokeWidth={1.5}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}