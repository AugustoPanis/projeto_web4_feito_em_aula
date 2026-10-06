/*
  Warnings:

  - You are about to drop the column `email` on the `Equipament` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[patrymony]` on the table `Equipament` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `patrymony` to the `Equipament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Equipament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Equipament` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Equipament` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Equipament_email_key";

-- AlterTable
ALTER TABLE "Equipament" DROP COLUMN "email",
ADD COLUMN     "acquisitionDate" TIMESTAMP(3),
ADD COLUMN     "patrymony" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Equipament_patrymony_key" ON "Equipament"("patrymony");
