import express from "express";
import {
  errorHandler,
  notFound,
} from "./middlewares/error.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";
import { requestId } from "./middlewares/request-id.middleware.js";
import { monstruoRouter } from "./routes/monstruo.routes.js";

export const app = express();

app.use(express.json());
app.use(requestId);
app.use(logger);

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Monster Factory API está funcionando",
  });
});

app.use("/api/monstruos", monstruoRouter);

app.use(notFound);
app.use(errorHandler);
