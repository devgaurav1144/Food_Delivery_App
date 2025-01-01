import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Restaurant from "@/app/lib/restaurantModel";
// const MONGO_URI = "mongodb+srv://singhgaurav1992:gaurav2024@cluster0.ey30a.mongodb.net/restroapp?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI = "mongodb://localhost:27017/restroapp";
export async function GET() {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    }

    // Fetch restaurants
    const data = await Restaurant.find();
    console.log(data);

    // Return response
    return NextResponse.json({ result: true, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ result: false, error: error.message });
  }
}


export async function POST(request) {
  let payload = await request.json();

  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


      console.log("Database connected successfully");
    }

    // Fetch restaurants
    const restaurant = await new Restaurant(payload);
    const result = restaurant.save();

    // Return response
    return NextResponse.json({ result: result, success:true });
  } catch (error) {
    console.error("Something Wrong:", error);
    return NextResponse.json({ result: false, error: error.message });
  }
}
