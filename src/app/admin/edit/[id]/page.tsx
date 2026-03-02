import { fetchProductById } from "@/actions/admin/actions";
import EditProduct from "@/components/admin/crud/modal/edit";

export default async function Page({ params }: {
    params: { id: string }
}) {

    const id = parseInt(params.id, 10)
    const product = await fetchProductById(id)

    return (
        <div className="flex justify-center">
            <EditProduct product={product} />
        </div>
    )
}