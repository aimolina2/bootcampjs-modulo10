import axios from "axios";
import { Personaje } from "./personajes-listado.model";

export const obtenerPersonajes = async (
  inputFormulario: string,
): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/personajes?nombre_like=${inputFormulario}`,
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};
