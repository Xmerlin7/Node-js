import dotenv from "dotenv";
import server from "./app.js";
import { connectDB } from "./config/database.js";
dotenv.config();
connectDB();
server.listen(process.env.PORT);
