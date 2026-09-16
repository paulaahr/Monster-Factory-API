import type { NextFunction, Request, Response } from "express";

export function logger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracion = Date.now() - inicio;
    console.log(
      `[${req.requestId ?? "sin-id"}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duracion}ms`
    );
  });

  next();
}
