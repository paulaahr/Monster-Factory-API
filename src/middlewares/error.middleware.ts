import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error.js";

export function notFound(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  next(new AppError(404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`));
}

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message =
    error instanceof Error ? error.message : "Error interno del servidor";

  res.status(statusCode).json({
    error: {
      message,
      requestId: req.requestId ?? null,
    },
  });
}
