-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "pass" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
