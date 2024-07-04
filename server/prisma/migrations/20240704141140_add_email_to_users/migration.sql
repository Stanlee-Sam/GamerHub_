/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users_table` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users_table"
  ADD COLUMN "email" TEXT;

-- UpdateExistingRows
UPDATE "users_table" SET "email" = '';

-- AlterTableNotNull
ALTER TABLE "users_table" ALTER COLUMN "email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_table_email_key" ON "users_table"("email");
