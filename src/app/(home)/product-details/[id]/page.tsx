import { fetchProductById } from "@/actions/individual-post/actions";
import ProductDetails from "@/components/product-details/index";

export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10)

    const products = await fetchProductById(id);

    console.log(id)

    return (
        <ProductDetails product={products} />
    )
}