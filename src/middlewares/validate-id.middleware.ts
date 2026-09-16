import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error.js";

export function validarId(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    next(new AppError(400, "El id debe ser un número entero positivo"));
    return;
  }

  next();
}
