/*
  Warnings:

  - You are about to drop the column `emailToUserId` on the `UserPreference` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_emailToUserId_fkey";

-- DropIndex
DROP INDEX "UserPreference_emailToUserId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferenceID" TEXT;

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "emailToUserId";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferenceID_fkey" FOREIGN KEY ("preferenceID") REFERENCES "UserPreference"("userPreferenceID") ON DELETE SET NULL ON UPDATE CASCADE;
