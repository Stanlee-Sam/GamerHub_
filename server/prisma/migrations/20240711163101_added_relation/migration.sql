-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products_table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
