-- CreateTable
CREATE TABLE "Placement" (
    "id" TEXT NOT NULL,
    "averagePackage" INTEGER NOT NULL,
    "highestPackage" INTEGER NOT NULL,
    "placementPercentage" DOUBLE PRECISION NOT NULL,
    "topRecruiters" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "collegeId" TEXT NOT NULL,

    CONSTRAINT "Placement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Placement" ADD CONSTRAINT "Placement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;
