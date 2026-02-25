import { fetchFilterProduct } from "@/actions/search/actions";
import Pagination from "@/components/pagination";
import Products from "@/components/products";
import Search from "@/components/search-box";

export default async function Page({ searchParams }: { searchParams: { query?: string; page?: string } }) {
    const query = searchParams?.query || '';
    const currentpage = Number(searchParams?.page) || 1;

    const { products, totalPages } = await fetchFilterProduct(query, currentpage);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-10">
            <Search />
            
            <Products produtos={products} totalPages={totalPages} currentPages={currentpage} />           
        </div>
    );
}