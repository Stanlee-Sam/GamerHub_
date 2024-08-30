/*
  Warnings:

  - You are about to drop the column `createdat` on the `products_table` table. All the data in the column will be lost.
  - You are about to drop the column `updatedat` on the `products_table` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `products_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products_table" DROP COLUMN "createdat",
DROP COLUMN "updatedat",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
