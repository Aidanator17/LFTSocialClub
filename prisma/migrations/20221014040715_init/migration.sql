/*
  Warnings:

  - You are about to drop the column `imageURL` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "imageURL",
ADD COLUMN     "imageID" TEXT NOT NULL DEFAULT '';
