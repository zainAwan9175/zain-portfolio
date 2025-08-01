export const dynamic = "force-dynamic"

import { type NextRequest, NextResponse } from "next/server"
import { DataModel } from "@/models/DataModel"
import { connectDB } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const portfolioData = await request.json()

    console.log("Saving portfolio data to database...")

    // Check if portfolio already exists
    const existingPortfolio = await DataModel.findOne()

    if (existingPortfolio) {
      // Update existing portfolio
      const updatedPortfolio = await DataModel.findByIdAndUpdate(existingPortfolio._id, portfolioData, {
        new: true,
      })
      // Convert to plain object before sending
      return NextResponse.json({
        success: true,
        data: updatedPortfolio,
        message: "Portfolio updated successfully",
      })
    } else {
      // Create new portfolio
      const newPortfolio = new DataModel(portfolioData)
      const savedPortfolio = await newPortfolio.save()
      // Convert to plain object before sending
      return NextResponse.json({
        success: true,
        data: savedPortfolio,
        message: "Portfolio created successfully",
      })
    }
  } catch (error: any) {
    console.error("Portfolio save error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const portfolio = await DataModel.findOne()

    if (!portfolio) {
      // If no data in database, return sample data from resume.tsx
      const { DATA } = await import("@/data/resume")
      
      // Transform the data to match the expected format
      const transformedData = {
        ...DATA,
        avatarUrl: {
          public_id: "sample",
          url: DATA.avatarUrl
        },
        contact: {
          ...DATA.contact,
          social: Object.values(DATA.contact.social).map(social => ({
            ...social,
            icon: {
              public_id: "sample",
              url: typeof social.icon === 'string' ? social.icon : 'sample-icon'
            }
          }))
        },
        work: DATA.work.map(work => ({
          ...work,
          logoUrl: {
            public_id: "sample",
            url: work.logoUrl
          }
        })),
        education: DATA.education.map(edu => ({
          ...edu,
          logoUrl: {
            public_id: "sample",
            url: edu.logoUrl
          }
        })),
        projects: DATA.projects.map(project => ({
          ...project,
          video: {
            public_id: "sample",
            url: project.video || "",
            duration: 0,
            width: 1920,
            height: 1080,
            format: "mp4",
            bytes: 0
          }
        }))
      }
      
      return NextResponse.json({ success: true, data: transformedData })
    }

    // Convert to plain object before sending
    return NextResponse.json({ success: true, data: portfolio.toObject() })
  } catch (error: any) {
    console.error("Portfolio fetch error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
