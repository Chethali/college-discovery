import { PrismaNeon } from "@prisma/adapter-neon"
import { hash } from "bcryptjs"
import "dotenv/config"
import { CollegeType, PrismaClient } from "../app/generated/prisma"

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("🌱 Seeding database...")

  // Clean existing data (order matters due to foreign keys)
  await prisma.compareSessionCollege.deleteMany()
  await prisma.compareSession.deleteMany()
  await prisma.savedCollege.deleteMany()
  await prisma.course.deleteMany()
  await prisma.college.deleteMany()
  await prisma.user.deleteMany()

  // Create a test user
  const hashedPassword = await hash("password123", 10)
  const user = await prisma.user.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
    },
  })
  console.log("✅ Created user:", user.email)

  // Create colleges
  const iitBombay = await prisma.college.create({
    data: {
      name: "IIT Bombay",
      description: "Indian Institute of Technology Bombay is one of India's premier engineering institutions.",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      type: CollegeType.Government,
      rating: 4.8,
      totalFees: 200000,
      establishedYear: 1958,
      website: "https://www.iitb.ac.in",
      courses: {
        create: [
          {
            name: "B.Tech Computer Science",
            duration: "4 years",
            fees: 200000,
            description: "Undergraduate program in Computer Science and Engineering",
          },
          {
            name: "B.Tech Electrical Engineering",
            duration: "4 years",
            fees: 200000,
            description: "Undergraduate program in Electrical Engineering",
          },
          {
            name: "M.Tech Artificial Intelligence",
            duration: "2 years",
            fees: 150000,
            description: "Postgraduate program in AI and Machine Learning",
          },
        ],
      },
      placements: {
        create: [
          {
            averagePackage: 1800000,
            highestPackage: 5000000,
            placementPercentage: 95.5,
            topRecruiters: "Google, Microsoft, Amazon, Goldman Sachs",
            year: 2024,
          },
        ],
      },
    },
  })
  console.log("✅ Created college:", iitBombay.name)

  const iitDelhi = await prisma.college.create({
    data: {
      name: "IIT Delhi",
      description: "Indian Institute of Technology Delhi is a public research university.",
      location: "New Delhi, Delhi",
      state: "Delhi",
      type: CollegeType.Government,
      rating: 4.7,
      totalFees: 200000,
      establishedYear: 1961,
      website: "https://home.iitd.ac.in",
      courses: {
        create: [
          {
            name: "B.Tech Computer Science",
            duration: "4 years",
            fees: 200000,
            description: "Undergraduate program in Computer Science",
          },
          {
            name: "B.Tech Mechanical Engineering",
            duration: "4 years",
            fees: 200000,
            description: "Undergraduate program in Mechanical Engineering",
          },
        ],
      },
      placements: {
        create: [
          {
            averagePackage: 1600000,
            highestPackage: 4500000,
            placementPercentage: 93.0,
            topRecruiters: "Microsoft, Adobe, Flipkart, Morgan Stanley",
            year: 2024,
          },
        ],
      },
    },
  })
  console.log("✅ Created college:", iitDelhi.name)

  const bitsGoa = await prisma.college.create({
    data: {
      name: "BITS Pilani - Goa Campus",
      description: "Birla Institute of Technology and Science, Goa Campus.",
      location: "Goa",
      state: "Goa",
      type: CollegeType.Deemed,
      rating: 4.3,
      totalFees: 450000,
      establishedYear: 2004,
      website: "https://www.bits-pilani.ac.in/goa",
      courses: {
        create: [
          {
            name: "B.Tech Computer Science",
            duration: "4 years",
            fees: 450000,
            description: "Undergraduate program in Computer Science",
          },
          {
            name: "B.Tech Electronics",
            duration: "4 years",
            fees: 450000,
            description: "Undergraduate program in Electronics",
          },
        ],
      },
      placements: {
        create: [
          {
            averagePackage: 1200000,
            highestPackage: 3500000,
            placementPercentage: 90.0,
            topRecruiters: "Qualcomm, Texas Instruments, Samsung, Cisco",
            year: 2024,
          },
        ],
      },
    },
  })
  console.log("✅ Created college:", bitsGoa.name)

  const vit = await prisma.college.create({
    data: {
      name: "VIT Vellore",
      description: "Vellore Institute of Technology is a private deemed university.",
      location: "Vellore, Tamil Nadu",
      state: "Tamil Nadu",
      type: CollegeType.Private,
      rating: 4.1,
      totalFees: 180000,
      establishedYear: 1984,
      website: "https://vit.ac.in",
      courses: {
        create: [
          {
            name: "B.Tech Computer Science",
            duration: "4 years",
            fees: 180000,
            description: "Undergraduate program in Computer Science",
          },
          {
            name: "B.Tech Information Technology",
            duration: "4 years",
            fees: 180000,
            description: "Undergraduate program in Information Technology",
          },
          {
            name: "MBA Technology Management",
            duration: "2 years",
            fees: 250000,
            description: "MBA with focus on technology management",
          },
        ],
      },
      placements: {
        create: [
          {
            averagePackage: 700000,
            highestPackage: 2000000,
            placementPercentage: 85.0,
            topRecruiters: "TCS, Infosys, Wipro, Cognizant",
            year: 2024,
          },
        ],
      },
    },
  })
  console.log("✅ Created college:", vit.name)

  const manipal = await prisma.college.create({
    data: {
      name: "Manipal Institute of Technology",
      description: "MIT Manipal is one of India's top private engineering colleges.",
      location: "Manipal, Karnataka",
      state: "Karnataka",
      type: CollegeType.Private,
      rating: 4.0,
      totalFees: 220000,
      establishedYear: 1957,
      website: "https://manipal.edu/mit.html",
      courses: {
        create: [
          {
            name: "B.Tech Computer Science",
            duration: "4 years",
            fees: 220000,
            description: "Undergraduate program in Computer Science",
          },
          {
            name: "B.Tech Civil Engineering",
            duration: "4 years",
            fees: 200000,
            description: "Undergraduate program in Civil Engineering",
          },
        ],
      },
      placements: {
        create: [
          {
            averagePackage: 800000,
            highestPackage: 2500000,
            placementPercentage: 82.0,
            topRecruiters: "Accenture, Capgemini, HCL, Deloitte",
            year: 2024,
          },
        ],
      },
    },
  })
  console.log("✅ Created college:", manipal.name)

  console.log("✅ Seeding complete!")
  console.log(`📊 Summary:`)
  console.log(`   - 1 test user (email: test@example.com, password: password123)`)
  console.log(`   - 5 colleges with courses`)
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
