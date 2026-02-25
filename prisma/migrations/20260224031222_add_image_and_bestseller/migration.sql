-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isBestSellerr" BOOLEAN NOT NULL DEFAULT false;
