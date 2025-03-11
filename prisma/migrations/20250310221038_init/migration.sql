/*
  Warnings:

  - You are about to drop the column `Week` on the `Planning` table. All the data in the column will be lost.
  - Added the required column `week` to the `Planning` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Planning" DROP COLUMN "Week",
ADD COLUMN     "week" TEXT NOT NULL;
