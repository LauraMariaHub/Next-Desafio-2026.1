import { fetchProductById } from "@/actions/individual-post/actions";
import ProductDetails from "@/components/product-details/index";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;
    
    const id = parseInt(resolvedParams.id, 10);

    const products = await fetchProductById(id);

    console.log(id);

    return (
        <ProductDetails product={products} />
    );
}