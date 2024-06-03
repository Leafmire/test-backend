-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT,
ALTER COLUMN "user_email" DROP NOT NULL;
