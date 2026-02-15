import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.DB_URI) {
    throw new Error("DB_URI is not defined");
  }

  await mongoose.connect(process.env.DB_URI);

  console.log("Database connected");
};
