import Table from "./table"
import { fetchAllProducts } from "@/actions/admin/actions";


export default async function Admin() {

    const { products, count } = await fetchAllProducts("", 1);
    return (
        <Table product={products} count={count} />
    )
}