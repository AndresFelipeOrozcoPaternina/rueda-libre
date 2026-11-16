# Guía de estudio: Rueda Nocturna

Esta guía solo está en andres_pruebas. El código sencillo de la landing también está en main.

## Orden de trabajo

1. Reto 5: header, main, secciones y footer. Flex para la fila del menú; grid para rutas y pasos.
2. Reto 6: primero una columna sin prefijo; después sm, md y lg.
3. Reto 7: colores y fuentes en @theme. dark sigue la preferencia del sistema.
4. Reto 8: dos clases de botones con @apply; el resto sigue con utilidades.

Para probar: abre nocturna/index.html con Live Server. Cambia el ancho en DevTools y emula prefers-color-scheme: dark en Rendering. Para compilar: entra a nocturna/src, ejecuta npm ci y luego npm run build. output.css es generado: no se edita línea por línea.

Los números siguientes corresponden a los archivos de esta versión. Cada línea aparece primero y debajo tiene su explicación.

## nocturna/index.html

**Línea 1**

`<!DOCTYPE html>`

Le dice al navegador que use HTML moderno.

**Línea 2**

`<html lang="es">`

La página está escrita en español.

**Línea 3**

`<head>`

Abre la información que usa el navegador.

**Línea 4**

`<meta charset="UTF-8">`

UTF-8 permite escribir tildes y ñ.

**Línea 5**

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

Usa el ancho real del dispositivo; hace posible el responsive.

**Línea 6**

`<meta name="description" content="Descubre Medellín en bicicleta con las tres rutas de Rueda Nocturna.">`

Descripción breve de la landing para buscadores.

**Línea 7**

`<meta name="color-scheme" content="light dark">`

Permite que los controles del navegador acompañen el tema claro u oscuro.

**Línea 8**

`<title>Rueda Nocturna | Rueda Libre</title>`

Nombre que aparece en la pestaña del navegador.

**Línea 9**

`<link rel="preconnect" href="https://fonts.googleapis.com">`

Prepara la conexión a Google Fonts. crossorigin permite usar recursos de ese otro dominio.

**Línea 10**

`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

Prepara la conexión a Google Fonts. crossorigin permite usar recursos de ese otro dominio.

**Línea 11**

`<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">`

Carga Montserrat 600/700 y Open Sans 400/600 desde Google Fonts.

**Línea 12**

`<link rel="stylesheet" href="src/output.css">`

Carga el CSS ya compilado; el navegador no interpreta @theme ni @apply directamente.

**Línea 13**

`</head>`

Cierra el elemento head.

**Línea 14**

`<body class="bg-crema font-cuerpo text-gris-asfalto dark:bg-azul-noche dark:text-crema">`

Abre el contenido visible y aplica los colores y la fuente base. Clases: `bg-crema`, `font-cuerpo`, `text-gris-asfalto`, `dark:bg-azul-noche`, `dark:text-crema`. Consulta su significado en el glosario.

**Línea 15**

`<header class="border-b border-gris-asfalto dark:border-crema">`

Encabezado con la marca y el menú. Clases: `border-b`, `border-gris-asfalto`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 16**

`<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `flex`, `max-w-6xl`, `flex-col`, `items-center`, `justify-between`, `gap-4`, `px-6`, `py-5`, `md:flex-row`. Consulta su significado en el glosario.

**Línea 17**

`<a href="../index.html" class="flex items-center gap-3 font-titulo font-bold">`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `flex`, `items-center`, `gap-3`, `font-titulo`, `font-bold`. Consulta su significado en el glosario.

**Línea 18**

`<img src="../img/images.jpeg" alt="" width="48" height="48" class="h-12 w-12 rounded-full object-cover">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-12`, `w-12`, `rounded-full`, `object-cover`. Consulta su significado en el glosario. width y height reservan espacio antes de cargar la imagen.

**Línea 19**

`Rueda Libre`

Contenido HTML de la página.

**Línea 20**

`</a>`

Cierra el elemento a.

**Línea 21**

`<nav aria-label="Navegación principal" class="flex items-center gap-6">`

Agrupa los enlaces de navegación; aria-label le da un nombre accesible. Clases: `flex`, `items-center`, `gap-6`. Consulta su significado en el glosario.

**Línea 22**

`<div class="hidden items-center gap-6 md:flex">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `hidden`, `items-center`, `gap-6`, `md:flex`. Consulta su significado en el glosario.

**Línea 23**

`<a href="#inicio" class="hover:underline">Inicio</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `hover:underline`. Consulta su significado en el glosario.

**Línea 24**

`<a href="#rutas" class="hover:underline">Rutas</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `hover:underline`. Consulta su significado en el glosario.

**Línea 25**

`<a href="#como-funciona" class="hover:underline">¿Cómo funciona?</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `hover:underline`. Consulta su significado en el glosario.

**Línea 26**

`</div>`

Cierra el elemento div.

**Línea 27**

`<a href="#inscripcion" class="btn-principal">Inscríbete</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-principal`. Consulta su significado en el glosario.

**Línea 28**

`</nav>`

Cierra el elemento nav.

**Línea 29**

`</div>`

Cierra el elemento div.

**Línea 30**

`</header>`

Cierra el elemento header.

**Línea 31**

`<main>`

Contenido principal; solo hay uno por página.

**Línea 32**

`<section id="inicio" class="bg-azul-noche text-crema dark:bg-gris-asfalto">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `bg-azul-noche`, `text-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 33**

`<div class="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `grid`, `max-w-6xl`, `items-center`, `gap-8`, `px-6`, `py-12`, `md:grid-cols-2`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 34**

`<div class="space-y-6">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-6`. Consulta su significado en el glosario.

**Línea 35**

`<span class="inline-block rounded-full bg-amarillo-farol px-3 py-1 text-sm font-semibold text-azul-noche">Jueves a sábado</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `inline-block`, `rounded-full`, `bg-amarillo-farol`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-azul-noche`. Consulta su significado en el glosario.

**Línea 36**

`<h1 class="font-titulo text-4xl font-bold lg:text-6xl">Rueda Nocturna</h1>`

Título principal de la página. Clases: `font-titulo`, `text-4xl`, `font-bold`, `lg:text-6xl`. Consulta su significado en el glosario.

**Línea 37**

`<p class="text-lg lg:text-xl">Descubre Medellín en bici cuando se encienden las luces.</p>`

Párrafo de texto. Clases: `text-lg`, `lg:text-xl`. Consulta su significado en el glosario.

**Línea 38**

`<p>3 rutas · Desde $55.000</p>`

Párrafo de texto.

**Línea 39**

`<a href="#rutas" class="btn-principal">Elige tu ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-principal`. Consulta su significado en el glosario.

**Línea 40**

`</div>`

Cierra el elemento div.

**Línea 41**

`<img src="../img/portada.jpeg" alt="Recorrido en bicicleta por la ciudad" width="640" height="420" class="h-64 w-full rounded-xl object-cover lg:h-80">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-64`, `w-full`, `rounded-xl`, `object-cover`, `lg:h-80`. Consulta su significado en el glosario. width y height reservan espacio antes de cargar la imagen.

**Línea 42**

`</div>`

Cierra el elemento div.

**Línea 43**

`</section>`

Cierra el elemento section.

**Línea 44**

`<section id="rutas">`

Bloque de contenido. Su id permite llegar con un enlace #id.

**Línea 45**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 46**

`<h2 class="font-titulo text-2xl font-bold text-azul-noche lg:text-3xl dark:text-amarillo-farol">Elige tu ruta</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `text-azul-noche`, `lg:text-3xl`, `dark:text-amarillo-farol`. Consulta su significado en el glosario.

**Línea 47**

`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `sm:grid-cols-2`, `lg:grid-cols-3`. Consulta su significado en el glosario.

**Línea 48**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 49**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Río y Parques" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 50**

`<h3 class="font-titulo text-xl font-bold">Río y Parques</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 51**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel fácil</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 52**

`<p class="grow">Un recorrido tranquilo para disfrutar las luces junto al río.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 53**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 54**

`</article>`

Cierra el elemento article.

**Línea 55**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 56**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Sabores de Barrio" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 57**

`<h3 class="font-titulo text-xl font-bold">Sabores de Barrio</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 58**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel medio</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 59**

`<p class="grow">Conoce los barrios y disfruta la ciudad en dos ruedas.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 60**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 61**

`</article>`

Cierra el elemento article.

**Línea 62**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 63**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Reto Las Palmas" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 64**

`<h3 class="font-titulo text-xl font-bold">Reto Las Palmas</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 65**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel difícil</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 66**

`<p class="grow">Una ruta con más esfuerzo para quienes buscan un reto.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 67**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 68**

`</article>`

Cierra el elemento article.

**Línea 69**

`</div>`

Cierra el elemento div.

**Línea 70**

`</div>`

Cierra el elemento div.

**Línea 71**

`</section>`

Cierra el elemento section.

**Línea 72**

`<section id="como-funciona" class="bg-white dark:bg-gris-asfalto">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `bg-white`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 73**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 74**

`<h2 class="font-titulo text-2xl font-bold text-azul-noche lg:text-3xl dark:text-amarillo-farol">¿Cómo funciona?</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `text-azul-noche`, `lg:text-3xl`, `dark:text-amarillo-farol`. Consulta su significado en el glosario.

**Línea 75**

`<ol class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">`

Lista ordenada de los cuatro pasos. Clases: `grid`, `grid-cols-1`, `gap-6`, `sm:grid-cols-2`, `lg:grid-cols-4`. Consulta su significado en el glosario.

**Línea 76**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">1</span><h3 class="font-titulo text-xl font-bold">Elige tu ruta</h3><p>Busca el nivel que se adapte a ti.</p></li>`

Un paso de la lista. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 77**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">2</span><h3 class="font-titulo text-xl font-bold">Inscríbete</h3><p>Completa tus datos en reservas.</p></li>`

Un paso de la lista. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 78**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">3</span><h3 class="font-titulo text-xl font-bold">Recoge tu equipo</h3><p>Prepara tu bicicleta y casco.</p></li>`

Un paso de la lista. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 79**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">4</span><h3 class="font-titulo text-xl font-bold">Rueda</h3><p>Disfruta el recorrido por Medellín.</p></li>`

Un paso de la lista. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 80**

`</ol>`

Cierra el elemento ol.

**Línea 81**

`</div>`

Cierra el elemento div.

**Línea 82**

`</section>`

Cierra el elemento section.

**Línea 83**

`<section id="inscripcion" class="bg-amarillo-farol text-azul-noche dark:bg-gris-asfalto dark:text-crema">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `bg-amarillo-farol`, `text-azul-noche`, `dark:bg-gris-asfalto`, `dark:text-crema`. Consulta su significado en el glosario.

**Línea 84**

`<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `flex`, `max-w-6xl`, `flex-col`, `items-center`, `justify-between`, `gap-6`, `px-6`, `py-12`, `md:flex-row`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 85**

`<div class="space-y-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-3`. Consulta su significado en el glosario.

**Línea 86**

`<h2 class="font-titulo text-2xl font-bold lg:text-3xl">La noche te espera</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `lg:text-3xl`. Consulta su significado en el glosario.

**Línea 87**

`<p>Elige tu próxima salida y reserva tu bicicleta.</p>`

Párrafo de texto.

**Línea 88**

`</div>`

Cierra el elemento div.

**Línea 89**

`<a href="../paginas/reservas.html" class="btn-secundario">Inscríbete</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 90**

`</div>`

Cierra el elemento div.

**Línea 91**

`</section>`

Cierra el elemento section.

**Línea 92**

`</main>`

Cierra el elemento main.

**Línea 93**

`<footer class="border-t border-gris-asfalto dark:border-crema">`

Pie con marca, contacto y horario. Clases: `border-t`, `border-gris-asfalto`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 94**

`<div class="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-8 md:flex-row">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `flex`, `max-w-6xl`, `flex-col`, `justify-between`, `gap-6`, `px-6`, `py-8`, `md:flex-row`. Consulta su significado en el glosario.

**Línea 95**

`<div class="space-y-2"><p class="font-titulo font-bold">Rueda Libre</p><p>Medellín en dos ruedas.</p></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`. Consulta su significado en el glosario.

**Línea 96**

`<div class="space-y-2"><p class="font-titulo font-bold">Contacto</p><a href="../paginas/encuentranos.html" class="underline">Encuéntranos</a></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`, `underline`. Consulta su significado en el glosario.

**Línea 97**

`<div class="space-y-2"><p class="font-titulo font-bold">Rueda Nocturna</p><p>Jueves a sábado</p><a href="componentes.html" class="underline">Kit de componentes</a></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`, `underline`. Consulta su significado en el glosario.

**Línea 98**

`</div>`

Cierra el elemento div.

**Línea 99**

`</footer>`

Cierra el elemento footer.

**Línea 100**

`</body>`

Cierra el elemento body.

**Línea 101**

`</html>`

Cierra el elemento html.

## nocturna/componentes.html

**Línea 1**

`<!DOCTYPE html>`

Le dice al navegador que use HTML moderno.

**Línea 2**

`<html lang="es">`

La página está escrita en español.

**Línea 3**

`<head>`

Abre la información que usa el navegador.

**Línea 4**

`<meta charset="UTF-8">`

UTF-8 permite escribir tildes y ñ.

**Línea 5**

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

Usa el ancho real del dispositivo; hace posible el responsive.

**Línea 6**

`<meta name="description" content="Descubre Medellín en bicicleta con las tres rutas de Rueda Nocturna.">`

Descripción breve de la landing para buscadores.

**Línea 7**

`<meta name="color-scheme" content="light dark">`

Permite que los controles del navegador acompañen el tema claro u oscuro.

**Línea 8**

`<title>Componentes | Rueda Nocturna</title>`

Nombre que aparece en la pestaña del navegador.

**Línea 9**

`<link rel="preconnect" href="https://fonts.googleapis.com">`

Prepara la conexión a Google Fonts. crossorigin permite usar recursos de ese otro dominio.

**Línea 10**

`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

Prepara la conexión a Google Fonts. crossorigin permite usar recursos de ese otro dominio.

**Línea 11**

`<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">`

Carga Montserrat 600/700 y Open Sans 400/600 desde Google Fonts.

**Línea 12**

`<link rel="stylesheet" href="src/output.css">`

Carga el CSS ya compilado; el navegador no interpreta @theme ni @apply directamente.

**Línea 13**

`</head>`

Cierra el elemento head.

**Línea 14**

`<body class="bg-crema font-cuerpo text-gris-asfalto dark:bg-azul-noche dark:text-crema">`

Abre el contenido visible y aplica los colores y la fuente base. Clases: `bg-crema`, `font-cuerpo`, `text-gris-asfalto`, `dark:bg-azul-noche`, `dark:text-crema`. Consulta su significado en el glosario.

**Línea 15**

`<main class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Contenido principal; solo hay uno por página. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 16**

`<h1 class="font-titulo text-3xl font-bold">Kit de Rueda Nocturna</h1>`

Título principal de la página. Clases: `font-titulo`, `text-3xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 17**

`<a href="index.html" class="underline">Volver a la landing</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `underline`. Consulta su significado en el glosario.

**Línea 18**

`<section id="botones" class="space-y-4">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `space-y-4`. Consulta su significado en el glosario.

**Línea 19**

`<h2 class="font-titulo text-2xl font-bold">Botones</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 20**

`<div class="flex flex-wrap gap-4">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `flex`, `flex-wrap`, `gap-4`. Consulta su significado en el glosario.

**Línea 21**

`<a href="index.html#inscripcion" class="btn-principal">Inscríbete</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-principal`. Consulta su significado en el glosario.

**Línea 22**

`<a href="index.html#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 23**

`</div>`

Cierra el elemento div.

**Línea 24**

`</section>`

Cierra el elemento section.

**Línea 25**

`<section id="etiquetas" class="space-y-4">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `space-y-4`. Consulta su significado en el glosario.

**Línea 26**

`<h2 class="font-titulo text-2xl font-bold">Etiqueta</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 27**

`<span class="inline-block rounded-full bg-amarillo-farol px-3 py-1 text-sm font-semibold text-azul-noche">Jueves a sábado</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `inline-block`, `rounded-full`, `bg-amarillo-farol`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-azul-noche`. Consulta su significado en el glosario.

**Línea 28**

`</section>`

Cierra el elemento section.

**Línea 29**

`<section id="cards" class="space-y-4">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `space-y-4`. Consulta su significado en el glosario.

**Línea 30**

`<h2 class="font-titulo text-2xl font-bold">Card de ruta</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 31**

`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `sm:grid-cols-2`, `lg:grid-cols-3`. Consulta su significado en el glosario.

**Línea 32**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 33**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Río y Parques" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 34**

`<h3 class="font-titulo text-xl font-bold">Río y Parques</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 35**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel fácil</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 36**

`<p class="grow">Un recorrido tranquilo para disfrutar las luces junto al río.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 37**

`<a href="index.html#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 38**

`</article>`

Cierra el elemento article.

**Línea 39**

`</div>`

Cierra el elemento div.

**Línea 40**

`</section>`

Cierra el elemento section.

**Línea 41**

`<section id="campos" class="space-y-4">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `space-y-4`. Consulta su significado en el glosario.

**Línea 42**

`<h2 class="font-titulo text-2xl font-bold">Campo de ejemplo</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 43**

`<label for="nombre" class="block font-semibold">Nombre</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 44**

`<input id="nombre" name="nombre" type="text" autocomplete="given-name" class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Campo de texto. autocomplete ayuda a completar el nombre. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario.

**Línea 45**

`</section>`

Cierra el elemento section.

**Línea 46**

`</main>`

Cierra el elemento main.

**Línea 47**

`</body>`

Cierra el elemento body.

**Línea 48**

`</html>`

Cierra el elemento html.

## nocturna/src/input.css

**Línea 1**

`@import "tailwindcss";`

Carga Tailwind para poder generar sus utilidades.

**Línea 2**

`@source "../*.html";`

Indica dónde buscar las clases usadas por la landing y el kit.

**Línea 3**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 4**

`@theme {`

Abre el tema: de estas variables salen utilidades como bg-azul-noche.

**Línea 5**

`--color-verde-ruta: #0284c7;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 6**

`--color-azul-noche: #0f172a;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 7**

`--color-naranja-pedal: #f59e0b;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 8**

`--color-gris-asfalto: #334155;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 9**

`--color-crema: #f8fafc;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 10**

`--color-amarillo-farol: #ffd166;`

Define un color propio de la marca con su valor hexadecimal.

**Línea 11**

`--font-titulo: "Montserrat", sans-serif;`

Define una familia; sans-serif es la alternativa si Google Fonts no carga.

**Línea 12**

`--font-cuerpo: "Open Sans", sans-serif;`

Define una familia; sans-serif es la alternativa si Google Fonts no carga.

**Línea 13**

`}`

Cierra el bloque abierto (tema, clase o capa).

**Línea 14**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 15**

`@layer components {`

Coloca las clases propias en la capa de componentes.

**Línea 16**

`.btn-principal {`

Abre una de las dos clases reutilizables de botón.

**Línea 17**

`@apply inline-flex items-center justify-center rounded-lg bg-amarillo-farol px-6 py-3 font-titulo font-bold text-azul-noche hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-ruta dark:focus-visible:outline-amarillo-farol;`

Agrupa utilidades existentes. Cada utilidad se explica en el glosario final.

**Línea 18**

`}`

Cierra el bloque abierto (tema, clase o capa).

**Línea 19**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 20**

`.btn-secundario {`

Abre una de las dos clases reutilizables de botón.

**Línea 21**

`@apply inline-flex items-center justify-center rounded-lg bg-azul-noche px-6 py-3 font-titulo font-bold text-white hover:bg-gris-asfalto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-ruta dark:bg-crema dark:text-azul-noche dark:hover:bg-amarillo-farol dark:focus-visible:outline-amarillo-farol;`

Agrupa utilidades existentes. Cada utilidad se explica en el glosario final.

**Línea 22**

`}`

Cierra el bloque abierto (tema, clase o capa).

**Línea 23**

`}`

Cierra el bloque abierto (tema, clase o capa).

## nocturna/src/package.json

**Línea 1**

`{`

Abre o cierra un objeto JSON. Las comas separan sus propiedades.

**Línea 2**

`"scripts": {`

Comandos que se ejecutan con npm run.

**Línea 3**

`"build": "tailwindcss -i ./input.css -o ./output.css --minify",`

Compila input.css en output.css; --minify reduce el tamaño del archivo.

**Línea 4**

`"dev": "tailwindcss -i ./input.css -o ./output.css --watch"`

--watch vuelve a compilar cuando guardas cambios.

**Línea 5**

`},`

Abre o cierra un objeto JSON. Las comas separan sus propiedades.

**Línea 6**

`"dependencies": {`

Paquetes necesarios para construir el CSS.

**Línea 7**

`"@tailwindcss/cli": "^4.3.4",`

CLI de Tailwind: herramienta que genera el CSS.

**Línea 8**

`"tailwindcss": "^4.3.4"`

Paquete de Tailwind; ^ permite versiones compatibles con esa versión principal.

**Línea 9**

`}`

Abre o cierra un objeto JSON. Las comas separan sus propiedades.

**Línea 10**

`}`

Abre o cierra un objeto JSON. Las comas separan sus propiedades.

## Glosario de clases utilizadas

Un prefijo cambia cuándo se aplica una clase. Por ejemplo, grid-cols-1 es la base del celular y lg:grid-cols-3 la cambia desde 1024 px. 1 rem suele equivaler a 16 px.

- `bg-amarillo-farol`: fondo de color amarillo-farol.
- `bg-azul-noche`: fondo de color azul-noche.
- `bg-crema`: fondo de color crema.
- `bg-white`: fondo de color white.
- `block`: elemento de bloque.
- `border`: borde de 1 px.
- `border-b`: borde inferior.
- `border-gris-asfalto`: borde de color gris-asfalto.
- `border-t`: borde superior.
- `btn-principal`: reúne las utilidades del botón amarillo usando @apply.
- `btn-secundario`: reúne las utilidades del botón oscuro y su versión clara en modo oscuro.
- `dark:bg-azul-noche`: Si el sistema usa modo oscuro: fondo de color azul-noche.
- `dark:bg-crema`: Si el sistema usa modo oscuro: fondo de color crema.
- `dark:bg-gris-asfalto`: Si el sistema usa modo oscuro: fondo de color gris-asfalto.
- `dark:border-crema`: Si el sistema usa modo oscuro: borde de color crema.
- `dark:focus-visible:outline-amarillo-farol`: Si el sistema usa modo oscuro: Al recibir foco visible, por ejemplo con Tab: contorno de foco de color amarillo-farol.
- `dark:focus:outline-amarillo-farol`: Si el sistema usa modo oscuro: focus: contorno de foco de color amarillo-farol.
- `dark:hover:bg-amarillo-farol`: Si el sistema usa modo oscuro: Al pasar el puntero: fondo de color amarillo-farol.
- `dark:text-amarillo-farol`: Si el sistema usa modo oscuro: texto de color amarillo-farol.
- `dark:text-azul-noche`: Si el sistema usa modo oscuro: texto de color azul-noche.
- `dark:text-crema`: Si el sistema usa modo oscuro: texto de color crema.
- `flex`: activa Flexbox.
- `flex-col`: apila en vertical.
- `flex-wrap`: permite que los hijos bajen a otra fila.
- `focus-visible:outline-2`: Al recibir foco visible, por ejemplo con Tab: contorno de 2 px.
- `focus-visible:outline-offset-4`: Al recibir foco visible, por ejemplo con Tab: separa el contorno 4 px.
- `focus-visible:outline-verde-ruta`: Al recibir foco visible, por ejemplo con Tab: contorno de foco de color verde-ruta.
- `focus:outline-2`: focus: contorno de 2 px.
- `focus:outline-offset-2`: focus: separa el contorno 2 px.
- `focus:outline-verde-ruta`: focus: contorno de foco de color verde-ruta.
- `font-bold`: letra en negrita (700).
- `font-cuerpo`: Open Sans, definida en @theme.
- `font-semibold`: letra seminegrita (600).
- `font-titulo`: Montserrat, definida en @theme.
- `gap-3`: separación entre hijos de 0.75 rem.
- `gap-4`: separación entre hijos de 1 rem.
- `gap-6`: separación entre hijos de 1.5 rem.
- `gap-8`: separación entre hijos de 2 rem.
- `grid`: activa CSS Grid.
- `grid-cols-1`: una columna.
- `grow`: aprovecha el espacio libre; alinea los botones de las cards.
- `h-10`: alto de 2.5 rem.
- `h-12`: alto de 3 rem.
- `h-40`: alto de 10 rem.
- `h-64`: alto de 16 rem.
- `hidden`: oculta el elemento.
- `hover:bg-gris-asfalto`: Al pasar el puntero: fondo de color gris-asfalto.
- `hover:bg-white`: Al pasar el puntero: fondo de color white.
- `hover:underline`: Al pasar el puntero: subrayado.
- `inline-block`: bloque que fluye con el texto.
- `inline-flex`: Flexbox que ocupa el ancho de su contenido.
- `items-center`: centra los hijos en el eje cruzado.
- `justify-between`: separa los hijos hacia los extremos.
- `justify-center`: centra los hijos en el eje principal.
- `lg:grid-cols-3`: Desde 1024 px: tres columnas iguales.
- `lg:grid-cols-4`: Desde 1024 px: cuatro columnas iguales.
- `lg:h-80`: Desde 1024 px: alto de 20 rem.
- `lg:py-20`: Desde 1024 px: relleno vertical de 5 rem.
- `lg:text-3xl`: Desde 1024 px: texto de 1.875 rem.
- `lg:text-6xl`: Desde 1024 px: texto de 3.75 rem.
- `lg:text-xl`: Desde 1024 px: texto de 1.25 rem.
- `max-w-6xl`: limita el ancho a 72 rem (1152 px).
- `md:flex`: Desde 768 px: activa Flexbox.
- `md:flex-row`: Desde 768 px: coloca en fila.
- `md:grid-cols-2`: Desde 768 px: dos columnas iguales.
- `mx-auto`: centra horizontalmente con márgenes automáticos.
- `object-cover`: llena el espacio de la imagen recortando lo necesario.
- `p-6`: relleno en los cuatro lados de 1.5 rem.
- `px-3`: relleno horizontal de 0.75 rem.
- `px-4`: relleno horizontal de 1 rem.
- `px-6`: relleno horizontal de 1.5 rem.
- `py-1`: relleno vertical de 0.25 rem.
- `py-12`: relleno vertical de 3 rem.
- `py-3`: relleno vertical de 0.75 rem.
- `py-5`: relleno vertical de 1.25 rem.
- `py-8`: relleno vertical de 2 rem.
- `rounded-full`: bordes totalmente redondeados.
- `rounded-lg`: redondeo grande.
- `rounded-xl`: redondeo mayor.
- `self-start`: alinea este hijo al inicio.
- `sm:grid-cols-2`: Desde 640 px: dos columnas iguales.
- `space-y-2`: separación vertical entre hijos de 0.5 rem.
- `space-y-3`: separación vertical entre hijos de 0.75 rem.
- `space-y-4`: separación vertical entre hijos de 1 rem.
- `space-y-6`: separación vertical entre hijos de 1.5 rem.
- `space-y-8`: separación vertical entre hijos de 2 rem.
- `text-2xl`: texto de 1.5 rem.
- `text-3xl`: texto de 1.875 rem.
- `text-4xl`: texto de 2.25 rem.
- `text-azul-noche`: texto de color azul-noche.
- `text-crema`: texto de color crema.
- `text-gris-asfalto`: texto de color gris-asfalto.
- `text-lg`: texto de 1.125 rem.
- `text-sm`: texto de 0.875 rem.
- `text-white`: texto de color white.
- `text-xl`: texto de 1.25 rem.
- `underline`: subrayado.
- `w-10`: ancho de 2.5 rem.
- `w-12`: ancho de 3 rem.
- `w-full`: ocupa todo el ancho disponible.

## Archivos auxiliares

- package-lock.json fija las versiones para repetir la instalación. Lo actualiza npm.
- output.css lo genera la CLI; se sube para que GitHub Pages funcione sin instalar nada.
- bitacora.txt guarda pruebas, contraste, medidas y la recomendación de framework.
- En el index.html principal se agregó un enlace a ./nocturna/index.html. ./ significa la carpeta actual; ../ sube una carpeta.
