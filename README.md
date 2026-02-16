# Módulo 10 - Laboratorio Módulo 10 Asincronía

Para poder visualizar el contenido de este laboratorio.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 1. Clonar repositorio - acceso a los datos

En este proyecto utilizamos los datos de los personajes del cómic de Mortadelo y Filemón que se encuentran en una API. Para usar estos datos clonamos el repositorio y lo ejecutamos.

Podemos ver los datos accediendo a `http://localhost:3000/personajes`

Creamos nuestro proyecto e instalamos axios para poder usarlo.

## 2. Organizar carpetas y archivos

Creamos los archivos que vamos a usar, como `constantes.ts` o la carpeta _personajes-listado_ donde incluiremos los archivos que contendrán el código que nos ayudará a darle funcionalidad a la web.

- `index.html` donde montaremos la parte visual, la web. Enlazamos las hojas de css que nos ayudarán a resetear y a dar estilo.
- `reseteo.css` para resetear los estilos. Contamos con una "página en blanco".
- `style.css` con los estilos aplicados en el frontend.
- _personajes-listado_ carpeta donde incluimos todos los archivos con los que nos ayudarán a generar el listado de personajes.
- `personajes-listado.ts` con el paso a paso que nos ayudará a pintar el listado.
- `personajes-listado.model.ts` donde definimos la interface de los datos con los que vamos a trabajar. En este caso los datos que tenemos de nuestros personajes.
- `personajes-listado.api.ts` la función principal que llama a la api para extraer los datos. En este caso usaremos axios.get para acceder a los personajes.
