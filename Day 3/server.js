import app from "./app.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
await connectDB();
app.listen(PORT);
