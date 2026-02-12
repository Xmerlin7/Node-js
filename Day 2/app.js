import express from "express";
import morgan from "morgan";

//Routes Imports
import adminRouter from "./routes/admin.route.js"
import teacherRouter from "./routes/teacher.route.js";
import notFound from "./middleware/notFound.middleware.js";
import globalErrorHandler from "./middleware/errorHandling.middleware.js";
import adminAuth from "./middleware/adminauth.middleware.js";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/admin", adminAuth, adminRouter);
app.use("/teachers", teacherRouter)

//Fall back route
app.use("/", notFound);

// error handling
app.use(globalErrorHandler)
export default app;
