import prisma from "@/src/lib/db";

const itemsPerPage = 6;

export async function fetchFilterProduct(query: string, currentPage: number) {
  const where = {
    OR: [{ text: { contains: query, mode: "insensitive" as const } }],
  };

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      where,
      take: itemsPerPage,
      skip: (currentPage - 1) * itemsPerPage,
    }),
    prisma.product.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return { products, totalPages };
}