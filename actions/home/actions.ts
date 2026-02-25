"use server"

import prisma from "@/src/lib/db"
import { Product } from "@/types/data";

export default async function getBestSellers() {
    const produto = await prisma.product.findMany({
        where: {
            isBestSeller: true
        },

        select: {
            id: true,
            text: true,
            price: true,
            imageUrl: true,
        },
        take: 4
    })

    return produto as Product[];
}

export async function fetchAllProducts() {

    const products = await prisma.product.findMany({
        orderBy: {
            id: "asc"
        }
    });

    return { products };

}
