/*
  Warnings:

  - Added the required column `img_path` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailPath` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "img_path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT,
ADD COLUMN     "thumbnailPath" TEXT NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;
