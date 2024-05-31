/*
  Warnings:

  - You are about to drop the column `subject_id` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `test_id` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `subject_id` on the `TestResult` table. All the data in the column will be lost.
  - Added the required column `test_id` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_id` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_test_id_fkey";

-- DropForeignKey
ALTER TABLE "TestResult" DROP CONSTRAINT "TestResult_subject_id_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "subject_id",
ADD COLUMN     "test_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "test_id";

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "subject_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TestResult" DROP COLUMN "subject_id";

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "Test"("test_id") ON DELETE CASCADE ON UPDATE CASCADE;
