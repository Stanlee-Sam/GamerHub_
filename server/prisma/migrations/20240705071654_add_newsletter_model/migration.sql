-- CreateTable
CREATE TABLE "newsletter_subscriptions_table" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "newsletter_subscriptions_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletter_subscriptions_table_email_key" ON "newsletter_subscriptions_table"("email");
