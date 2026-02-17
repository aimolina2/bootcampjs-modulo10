import { Personaje } from "./personajes-listado.model";
import { obtenerPersonajes } from "./personaje-listado.api";

const crearElementoImagen = (
  imagen: string,
  nombre: string,
): HTMLImageElement => {
  const img = document.createElement("img");
  img.src = imagen;
  img.alt = nombre;
  return img;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = texto; // usamos innerHTML para permitir etiquetas HTML en el texto, como <strong>
  return parrafo;
};

const crearCardPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoCard = document.createElement("div");
  elementoCard.classList.add("card-personaje");

  const imagen = crearElementoImagen(
    `http://localhost:3000/${personaje.imagen}`,
    personaje.nombre,
  );
  elementoCard.appendChild(imagen);

  const nombre = crearElementoParrafo(
    `<strong>Nombre:</strong> ${personaje.nombre}`,
  );
  elementoCard.appendChild(nombre);

  const especialidad = crearElementoParrafo(
    `<strong>Especialidad:</strong> ${personaje.especialidad}`,
  );
  elementoCard.appendChild(especialidad);

  const habilidades = crearElementoParrafo(
    `<strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}`,
  );
  elementoCard.appendChild(habilidades);

  return elementoCard;
};

const pintarPersonajes = async (inputFormulario: string): Promise<void> => {
  const personajes = await obtenerPersonajes(inputFormulario);
  const contenedorPersonajes = document.getElementById("listado-personajes");

  if (contenedorPersonajes && contenedorPersonajes instanceof HTMLDivElement) {
    contenedorPersonajes.innerHTML = ""; // Limpiar el contenedor antes de pintar los personajes
    personajes.forEach((personaje) => {
      const cardPersonaje = crearCardPersonaje(personaje);
      contenedorPersonajes.appendChild(cardPersonaje);
    });
  } else {
    throw new Error("No se encontró el contenedor de personajes");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  pintarPersonajes("");
});

const escucharFormulario = (event: Event): void => {
  event.preventDefault();
  const inputFormulario = document.querySelector("#nombre");
  if (inputFormulario && inputFormulario instanceof HTMLInputElement) {
    pintarPersonajes(inputFormulario.value);
  }
};

const formulario = document.querySelector("#formulario");
if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", escucharFormulario);
}
