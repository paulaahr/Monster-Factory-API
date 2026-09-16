import type { NextFunction, Request, Response } from "express";
import type {
  Color,
  Personalidad,
  Rareza,
} from "../models/monstruo.model.js";
import { AppError } from "../utils/app-error.js";

const colores: Color[] = ["azul", "morado", "amarillo", "verde"];
const personalidades: Personalidad[] = [
  "amigable",
  "divertido",
  "tímido",
  "peligroso",
];
const rarezas: Rareza[] = ["común", "raro", "legendario"];

export function validarMonstruo(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const { nombre, color, ojos, personalidad, habilidad, rareza } = req.body;

  if (
    typeof nombre !== "string" ||
    typeof habilidad !== "string" ||
    nombre.trim() === "" ||
    habilidad.trim() === ""
  ) {
    next(new AppError(400, "Nombre y habilidad son obligatorios"));
    return;
  }

  if (typeof ojos !== "number" || !Number.isInteger(ojos) || ojos < 1) {
    next(new AppError(400, "Ojos debe ser un número entero mayor a 0"));
    return;
  }

  if (!colores.includes(color)) {
    next(new AppError(400, `Color inválido. Usa: ${colores.join(", ")}`));
    return;
  }

  if (!personalidades.includes(personalidad)) {
    next(
      new AppError(
        400,
        `Personalidad inválida. Usa: ${personalidades.join(", ")}`
      )
    );
    return;
  }

  if (!rarezas.includes(rareza)) {
    next(new AppError(400, `Rareza inválida. Usa: ${rarezas.join(", ")}`));
    return;
  }

  req.body.nombre = nombre.trim();
  req.body.habilidad = habilidad.trim();
  next();
}
