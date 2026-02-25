import { viewProduct } from "@/actions/admin/actions";
import ViewProduct from "@/components/admin/crud/modal/view";

export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10);
    const productData = await viewProduct(id);

    return (
        <div className="flex justify-center">
            <ViewProduct products={productData} />
        </div>
    );
}