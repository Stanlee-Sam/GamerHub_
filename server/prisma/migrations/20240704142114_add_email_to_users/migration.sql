/*
  Warnings:

  - You are about to drop the column `emailAddress` on the `users_table` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_table_emailAddress_key";

-- AlterTable
ALTER TABLE "users_table" DROP COLUMN "emailAddress";
