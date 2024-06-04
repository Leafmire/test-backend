/*
  Warnings:

  - The primary key for the `TestResult` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `result_id` on the `TestResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TestResult" DROP CONSTRAINT "TestResult_pkey",
DROP COLUMN "result_id",
ADD CONSTRAINT "TestResult_pkey" PRIMARY KEY ("user_id", "test_id");
