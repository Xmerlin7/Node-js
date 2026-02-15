import express from "express";
import morgan from "morgan";

//Routes Imports
import adminRouter from "./routes/admin.route.js";
import teacherRouter from "./routes/teacher.route.js";
import childRouter from "./routes/child.route.js";
import classRouter from "./routes/class.route.js";
import notFound from "./middleware/notFound.middleware.js";
import globalErrorHandler from "./middleware/errorHandling.middleware.js";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/admin", adminRouter);
app.use(teacherRouter);
app.use(childRouter);
app.use(classRouter);

//Fall back route
app.use("/", notFound);

// error handling
app.use(globalErrorHandler);
export default app;
