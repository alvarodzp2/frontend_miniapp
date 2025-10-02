Frontend MiniApp 

Este proyecto es una mini aplicación web construida como parte de la evaluación práctica de Frontend.
La aplicación consume la API pública FakeStore API y permite listar, buscar, paginar y guardar productos como favoritos.

Demo pública

https://frontendminiapp.vercel.app/

Funcionalidades

Listado inicial de productos en forma de tarjetas.

Búsqueda con debounce de 300ms.

Paginación con botones anterior/siguiente y numeración.

Vista de favoritos persistente en localStorage.

Modal accesible para ver detalles del producto:

Se abre con teclado o clic.

Se cierra con tecla Escape o clic fuera.

Focus trap: el foco no sale del modal.

Estados de carga, error y sin resultados.

Modo claro y oscuro.

URL="https://fakestoreapi.com/products"

Accesibilidad

Navegación con teclado (Tab, Shift+Tab, Enter).

Modal accesible.

