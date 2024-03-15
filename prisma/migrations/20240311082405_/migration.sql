/*
  Warnings:

  - Added the required column `thumbnail_path` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "thumbnail_path" TEXT NOT NULL;
