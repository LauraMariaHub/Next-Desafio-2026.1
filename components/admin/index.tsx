import Table from "./table"
import { fetchAllProducts } from "@/actions/admin/actions";


export default async function Admin(){

    const {products,count} = await fetchAllProducts()

    return(
        <Table product={products} count={count}/>
    )
}