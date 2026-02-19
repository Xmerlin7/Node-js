import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import categoryRouter from "./routes/category.route.js";
import productRouter from "./routes/product.route.js";
import globalErrorHandler from "./middlewares/errors/errorHandler.js";
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);

//Centralized global Error handling
app.use(globalErrorHandler);
export default app;
