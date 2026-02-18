import Pagination from "@/components/pagination";
import Products from "@/components/products";
import Search from "@/components/search-box";

export default function Page() {
    return(
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">
            <Search />
            <Products/>
            <Pagination currentPage={1} totalPages={3} />
        </div>
    )
}