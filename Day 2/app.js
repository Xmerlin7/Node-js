import express from "express";
import morgan from "morgan";

//Routes Imports
import teacherRouter from "./routes/teacher.route.js";
import notFound from "./middleware/notFound.middleware.js";
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
// app.use("/admin", aminRouter);
app.use("/teachers", teacherRouter)

//Fall back route
app.use("/", notFound);
export default app;
