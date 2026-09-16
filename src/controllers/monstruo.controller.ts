import type { NextFunction, Request, Response } from "express";
import type {
  ActualizarMonstruo,
  CrearMonstruo,
} from "../models/monstruo.model.js";
import {
  actualizarMonstruo,
  crearMonstruo,
  eliminarMonstruo,
  listarMonstruos,
  obtenerMonstruoPorId,
} from "../services/monstruo.service.js";

export function getMonstruos(
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    res.status(200).json({ data: listarMonstruos() });
  } catch (error) {
    next(error);
  }
}

export function getMonstruoPorId(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);
    res.status(200).json({ data: obtenerMonstruoPorId(id) });
  } catch (error) {
    next(error);
  }
}

export function postMonstruo(
  req: Request<unknown, unknown, CrearMonstruo>,
  res: Response,
  next: NextFunction
): void {
  try {
    const nuevoMonstruo = crearMonstruo(req.body);
    res.status(201).json({ data: nuevoMonstruo });
  } catch (error) {
    next(error);
  }
}

export function putMonstruo(
  req: Request<{ id: string }, unknown, ActualizarMonstruo>,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);
    const actualizado = actualizarMonstruo(id, req.body);
    res.status(200).json({ data: actualizado });
  } catch (error) {
    next(error);
  }
}

export function deleteMonstruo(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);
    eliminarMonstruo(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
