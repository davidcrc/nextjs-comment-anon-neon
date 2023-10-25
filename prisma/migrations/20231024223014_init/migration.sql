-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageHandle" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "handle" VARCHAR(100) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("handle")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_pageHandle_fkey" FOREIGN KEY ("pageHandle") REFERENCES "Page"("handle") ON DELETE RESTRICT ON UPDATE CASCADE;
