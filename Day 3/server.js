import app from "./app.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

try {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
