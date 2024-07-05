-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "category" TEXT NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_table_name_key" ON "products_table"("name");
