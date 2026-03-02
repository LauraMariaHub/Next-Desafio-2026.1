"use server"

import prisma from "@/src/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchAllProducts(query: string, currentPage: number) {
    try {

        const products = await prisma.product.findMany({
            orderBy: {
                id: "asc"
            }
        });

        const count = await prisma.product.count();

        return { products, count };
    } catch (error) {
        console.error("Erro ao buscar todos os produtos:", error);
        return { products: [], count: 0 };
    }
}

export async function deleteProduct(id: number | undefined) {
    await prisma.product.delete({
        where: { id },
    });
    revalidatePath("admin")
}

export async function createProductAction(formData: FormData) {
    const title = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const image = formData.get("image");

    await prisma.product.create({
        data: {
            text: title,
            price: isNaN(price) ? 0 : price,
            description: description,
            imageUrl: "/logo"
        }
    });

    redirect("/admin");
}

export async function fetchProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
    })

    return product;
}

export async function updateProduct(id: number | undefined, formData: FormData) {
    const title = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const description = formData.get("description") as string;
    const image = formData.get("image");

    await prisma.product.update({
        where: { id },
        data: {
            text: title,
            price: isNaN(price) ? 0 : price,
            description: description,
            imageUrl: "/logo"
        }
    })

    redirect("/admin");

}

export async function viewProduct(id: number | undefined) {
    const product = await prisma.product.findUnique({
        where: { id },
    })
    return product;
}
