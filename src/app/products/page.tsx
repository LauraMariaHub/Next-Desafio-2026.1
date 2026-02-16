import Pagination from "@/components/pagination";
import Search from "@/components/search-box";

export default function Page() {
    return(
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">
            <Search />
            <Pagination currentPage={1} totalPages={3} />
        </div>
    )
}