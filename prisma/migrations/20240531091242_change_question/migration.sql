/*
  Warnings:

  - Added the required column `choice1` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choice2` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choice3` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choice4` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choice5` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `answer` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "choice1" TEXT NOT NULL,
ADD COLUMN     "choice2" TEXT NOT NULL,
ADD COLUMN     "choice3" TEXT NOT NULL,
ADD COLUMN     "choice4" TEXT NOT NULL,
ADD COLUMN     "choice5" TEXT NOT NULL,
DROP COLUMN "answer",
ADD COLUMN     "answer" INTEGER NOT NULL;
