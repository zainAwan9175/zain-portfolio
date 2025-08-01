import mongoose from "mongoose"

const MONGODB_URI:any = process.env.MONGODB_URI 

export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return
    }
    await mongoose.connect(MONGODB_URI)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}
