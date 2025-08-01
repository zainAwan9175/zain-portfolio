import { type NextRequest, NextResponse } from "next/server"
import { DataModel } from "@/models/DataModel"
import { connectDB} from "@/lib/db"

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
      return NextResponse.json({ success: true, data: updatedPortfolio, message: "Portfolio updated successfully" })
    } else {
      // Create new portfolio
      const newPortfolio = new DataModel(portfolioData)
      const savedPortfolio = await newPortfolio.save()
      return NextResponse.json({ success: true, data: savedPortfolio, message: "Portfolio created successfully" })
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
      return NextResponse.json({ success: false, message: "No portfolio found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: portfolio })
  } catch (error: any) {
    console.error("Portfolio fetch error:", error)
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
