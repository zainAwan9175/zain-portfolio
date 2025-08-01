import mongoose from "mongoose"

// const MONGODB_URI:any = process.env.MONGODB_URI 

export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return
    }
    await mongoose.connect("mongodb+srv://root:root@cluster0.gut2gfz.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Cluster0")
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}
