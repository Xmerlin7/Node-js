import express from "express";
import morgan from "morgan";
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/admin", aminRouter);
app.use("/teachers", teachersRouter)

//Fall back route

export default app;
