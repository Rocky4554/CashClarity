-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isPro" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "transactionCount" INTEGER NOT NULL DEFAULT 0;
