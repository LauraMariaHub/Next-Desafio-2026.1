'use client'
import { deleteProduct } from "@/actions/admin/actions"
import { Pencil, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export function EditButtom({ id }: { id: number }) {
    return (
        <Link
            href={`/admin/edit/${id}`}
            className="p-2 rounded-md hover:bg-green-100 transition"
        >
            <Pencil className="w-5 h-5 text-white  hover:bg-green-100 transition" />
        </Link>
    )
}

export function DeleteButtom({ id }: { id: number }) {
    return (
        <button
            onClick={() => deleteProduct(id)}
            className="p-2 rounded-md hover:bg-green-100 transition"
        >
            <Trash2 className="w-5 h-5 text-white" />
        </button>
    )
}

export function ViewButtom({ id }: { id: number }) {
    return (
        <Link
            href={`/admin/view/${id}`}
            className="p-2 rounded-md hover:bg-green-100 transition"
        >
            <Eye className="w-5 h-5 text-white" />
        </Link>
    )
}

export function CreateButtom() {
    return (
        <Link href={`admin/create`}>
            <button className="font-semibold py-2 px-6 border-2 rounded-md border-none text-[#6a8b96] bg-[#ffffff] text-[clamp(0.75rem,2.5vw,1rem)]">
                Cadastrar Produto
            </button>
        </Link>
    )
}