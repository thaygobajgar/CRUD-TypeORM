import "express-async-errors";
import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/users.routes";
import errorHandler from "./errors/errorHandler";
import sessionRoutes from "./routes/session.routes";
import categoriesRoutes from "./routes/categories.routes";
import propertiesRoutes from "./routes/properties.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(errorHandler);

export default app;
