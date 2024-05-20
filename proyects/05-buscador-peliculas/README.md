# React + Vite

# Enunciado

Crea una aplicación para buscar películas

API a usar: - <https://www.omdbapi.com/> Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

# Install

⬇️ Npm install

⬇️ Uso de Water.css como frameWork classless - "Framework classless" o "frameworks sin clases" son hojas de estilo CSS que no imponen un estilo predefinido. En lugar de eso, proporcionan una base estilística neutra. No incluyen estilos para componentes de UI como botones, formularios, etc. En su lugar, proporcionan una base de estilos para elementos HTML sin clases.

⬇️ uso de <https://github.com/angus-c/just> ( just debounce it ) para el debounce de la búsqueda de películas en la API.
npm install just-debounce-it -E

# API KEY

🔑 <https://www.omdbapi.com/?apikey=cc6b9bed&s=>
"s" Yes <empty> Movie title to search for.
