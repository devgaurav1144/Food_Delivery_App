import mongoose from "mongoose";
// Define the schema
const restaurantSchema = new mongoose.Schema({
  email: String,
  password: String,
  cpassword: String,
  restrurant: String,
  city: String,
  address: String,
  contactno: String,
});

// Create or retrieve the model
const Restaurant = mongoose.models.restaurants || mongoose.model("restaurants", restaurantSchema);

// Export the model
export default Restaurant;
