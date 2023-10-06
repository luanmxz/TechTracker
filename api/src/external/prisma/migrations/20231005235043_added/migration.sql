-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_id" TEXT NOT NULL DEFAULT references auth.users;
