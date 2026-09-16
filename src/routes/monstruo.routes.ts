import { Router } from "express";
import {
  deleteMonstruo,
  getMonstruoPorId,
  getMonstruos,
  postMonstruo,
  putMonstruo,
} from "../controllers/monstruo.controller.js";
import { validarId } from "../middlewares/validate-id.middleware.js";
import { validarMonstruo } from "../middlewares/validate-monstruo.middleware.js";

export const monstruoRouter = Router();

monstruoRouter.get("/", getMonstruos);
monstruoRouter.get("/:id", validarId, getMonstruoPorId);
monstruoRouter.post("/", validarMonstruo, postMonstruo);
monstruoRouter.put("/:id", validarId, validarMonstruo, putMonstruo);
monstruoRouter.delete("/:id", validarId, deleteMonstruo);
