import { monstruos } from "../data/monstruos.data.js";
import type {
  ActualizarMonstruo,
  CrearMonstruo,
  Monstruo,
} from "../models/monstruo.model.js";
import { AppError } from "../utils/app-error.js";

export function listarMonstruos(): Monstruo[] {
  return monstruos;
}

export function obtenerMonstruoPorId(id: number): Monstruo {
  const monstruo = monstruos.find((item) => item.id === id);

  if (!monstruo) {
    throw new AppError(404, "Monstruo no encontrado");
  }

  return monstruo;
}

export function crearMonstruo(datos: CrearMonstruo): Monstruo {
  const nuevoId =
    monstruos.length === 0
      ? 1
      : Math.max(...monstruos.map((item) => item.id)) + 1;

  const nuevoMonstruo: Monstruo = {
    id: nuevoId,
    ...datos,
  };

  monstruos.push(nuevoMonstruo);
  return nuevoMonstruo;
}

export function actualizarMonstruo(
  id: number,
  datos: ActualizarMonstruo
): Monstruo {
  const indice = monstruos.findIndex((item) => item.id === id);

  if (indice === -1) {
    throw new AppError(404, "Monstruo no encontrado");
  }

  const actualizado: Monstruo = {
    id,
    ...datos,
  };

  monstruos[indice] = actualizado;
  return actualizado;
}

export function eliminarMonstruo(id: number): void {
  const indice = monstruos.findIndex((item) => item.id === id);

  if (indice === -1) {
    throw new AppError(404, "Monstruo no encontrado");
  }

  monstruos.splice(indice, 1);
}
