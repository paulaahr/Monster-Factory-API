export type Color = "azul" | "morado" | "amarillo" | "verde";

export type Personalidad =
  | "amigable"
  | "divertido"
  | "tímido"
  | "peligroso";

export type Rareza = "común" | "raro" | "legendario";

export interface Monstruo {
  id: number;
  nombre: string;
  color: Color;
  ojos: number;
  personalidad: Personalidad;
  habilidad: string;
  rareza: Rareza;
}

export type CrearMonstruo = Omit<Monstruo, "id">;
export type ActualizarMonstruo = Omit<Monstruo, "id">;
