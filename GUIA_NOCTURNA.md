# Guía de estudio: Rueda Nocturna

Esta guía solo está en andres_pruebas. El código sencillo de la landing también está en main.

## Orden de trabajo

1. Reto 5: header, main, secciones y footer. Flex para la fila del menú; grid para rutas y pasos.
2. Reto 6: primero una columna sin prefijo; después sm, md y lg.
3. Reto 7: colores y fuentes en @theme. dark sigue la preferencia del sistema.
4. Reto 8: dos clases de botones con @apply; el resto sigue con utilidades.

Para probar: abre nocturna/index.html con Live Server. Cambia el ancho en DevTools y emula prefers-color-scheme: dark en Rendering. Para compilar: entra a nocturna/src, ejecuta npm ci y luego npm run build. output.css es generado: no se edita línea por línea.

Los números siguientes corresponden a los archivos de esta versión. Cada línea aparece primero y debajo tiene su explicación.

## Continuación: retos 9 al 12

5. Reto 9: fieldset y legend agrupan los datos; label se conecta al id del campo. required, minlength, pattern, min y max hacen la validación nativa.
6. Reto 10: los enlaces relativos conectan ambos sitios y marca.css conserva los mismos colores y fuentes. El carrusel de Bootstrap tiene cuatro diapositivas sin reproducción automática.
7. Reto 11: las cards de planes usan grid y flex. El borde superior de Pareja es más grueso; su etiqueta absoluta no empuja a las otras cards.
8. Reto 12: W3C revisa el HTML, axe ayuda a revisar accesibilidad y las capturas muestran el resultado. El README y docs/demo.md explican cómo abrirlo y presentarlo.

Importante: la validación del navegador no sustituye la validación del servicio receptor. destino sigue vacío porque falta un receptor real. Las pruebas de envío usaron datos ficticios y una respuesta local simulada.

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

`<div class="flex flex-wrap gap-4">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `flex`, `flex-wrap`, `gap-4`. Consulta su significado en el glosario.

**Línea 40**

`<a href="#rutas" class="btn-principal">Elige tu ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-principal`. Consulta su significado en el glosario.

**Línea 41**

`<a href="../paginas/reservas.html" class="btn-secundario">Reserva tu bici</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 42**

`</div>`

Cierra el elemento div.

**Línea 43**

`</div>`

Cierra el elemento div.

**Línea 44**

`<img src="../img/portada.jpeg" alt="Recorrido en bicicleta por la ciudad" width="640" height="420" class="h-64 w-full rounded-xl object-cover lg:h-80">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-64`, `w-full`, `rounded-xl`, `object-cover`, `lg:h-80`. Consulta su significado en el glosario. width y height reservan espacio antes de cargar la imagen.

**Línea 45**

`</div>`

Cierra el elemento div.

**Línea 46**

`</section>`

Cierra el elemento section.

**Línea 47**

`<section id="rutas">`

Bloque de contenido. Su id permite llegar con un enlace #id.

**Línea 48**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 49**

`<h2 class="font-titulo text-2xl font-bold text-azul-noche lg:text-3xl dark:text-amarillo-farol">Elige tu ruta</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `text-azul-noche`, `lg:text-3xl`, `dark:text-amarillo-farol`. Consulta su significado en el glosario.

**Línea 50**

`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `sm:grid-cols-2`, `lg:grid-cols-3`. Consulta su significado en el glosario.

**Línea 51**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 52**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Río y Parques" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 53**

`<h3 class="font-titulo text-xl font-bold">Río y Parques</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 54**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel fácil</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 55**

`<p class="grow">Un recorrido tranquilo para disfrutar las luces junto al río.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 56**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 57**

`</article>`

Cierra el elemento article.

**Línea 58**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 59**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Sabores de Barrio" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 60**

`<h3 class="font-titulo text-xl font-bold">Sabores de Barrio</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 61**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel medio</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 62**

`<p class="grow">Conoce los barrios y disfruta la ciudad en dos ruedas.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 63**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 64**

`</article>`

Cierra el elemento article.

**Línea 65**

`<article class="flex flex-col gap-4 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `flex-col`, `gap-4`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 66**

`<img src="../img/ruta.jpeg" alt="Camino de la ruta Reto Las Palmas" width="480" height="320" class="h-40 w-full rounded-lg object-cover" loading="lazy">`

Imagen: src indica el archivo y alt describe su contenido. alt vacío evita repetir la marca. Clases: `h-40`, `w-full`, `rounded-lg`, `object-cover`. Consulta su significado en el glosario. lazy retrasa la carga hasta acercarse a la imagen. width y height reservan espacio antes de cargar la imagen.

**Línea 67**

`<h3 class="font-titulo text-xl font-bold">Reto Las Palmas</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 68**

`<span class="self-start rounded-full bg-crema px-3 py-1 text-sm font-semibold text-gris-asfalto">Nivel difícil</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `self-start`, `rounded-full`, `bg-crema`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-gris-asfalto`. Consulta su significado en el glosario.

**Línea 69**

`<p class="grow">Una ruta con más esfuerzo para quienes buscan un reto.</p>`

Párrafo de texto. Clases: `grow`. Consulta su significado en el glosario.

**Línea 70**

`<a href="#inscripcion" class="btn-secundario">Elegir ruta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 71**

`</article>`

Cierra el elemento article.

**Línea 72**

`</div>`

Cierra el elemento div.

**Línea 73**

`</div>`

Cierra el elemento div.

**Línea 74**

`</section>`

Cierra el elemento section.

**Línea 75**

`<section id="como-funciona" class="bg-white dark:bg-gris-asfalto">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `bg-white`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 76**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 77**

`<h2 class="font-titulo text-2xl font-bold text-azul-noche lg:text-3xl dark:text-amarillo-farol">¿Cómo funciona?</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `text-azul-noche`, `lg:text-3xl`, `dark:text-amarillo-farol`. Consulta su significado en el glosario.

**Línea 78**

`<ol class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">`

Lista ordenada de los cuatro pasos. Clases: `grid`, `grid-cols-1`, `gap-6`, `sm:grid-cols-2`, `lg:grid-cols-4`. Consulta su significado en el glosario.

**Línea 79**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">1</span><h3 class="font-titulo text-xl font-bold">Elige tu ruta</h3><p>Busca el nivel que se adapte a ti.</p></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 80**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">2</span><h3 class="font-titulo text-xl font-bold">Inscríbete</h3><p>Completa el formulario de esta página.</p></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 81**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">3</span><h3 class="font-titulo text-xl font-bold">Recoge tu equipo</h3><p>Prepara tu bicicleta y casco.</p></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 82**

`<li class="space-y-3"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amarillo-farol font-bold text-azul-noche">4</span><h3 class="font-titulo text-xl font-bold">Rueda</h3><p>Disfruta el recorrido por Medellín.</p></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan. Clases: `space-y-3`, `inline-flex`, `h-10`, `w-10`, `items-center`, `justify-center`, `rounded-full`, `bg-amarillo-farol`, `font-bold`, `text-azul-noche`, `font-titulo`, `text-xl`. Consulta su significado en el glosario.

**Línea 83**

`</ol>`

Cierra el elemento ol.

**Línea 84**

`</div>`

Cierra el elemento div.

**Línea 85**

`</section>`

Cierra el elemento section.

**Línea 86**

`<section id="planes">`

Bloque de contenido. Su id permite llegar con un enlace #id.

**Línea 87**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 88**

`<h2 class="font-titulo text-2xl font-bold text-azul-noche lg:text-3xl dark:text-amarillo-farol">Planes Rueda Nocturna</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `text-azul-noche`, `lg:text-3xl`, `dark:text-amarillo-farol`. Consulta su significado en el glosario.

**Línea 89**

`<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `lg:grid-cols-3`. Consulta su significado en el glosario.

**Línea 90**

`<article class="flex h-full flex-col justify-between gap-6 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `h-full`, `flex-col`, `justify-between`, `gap-6`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 91**

`<div class="space-y-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-3`. Consulta su significado en el glosario.

**Línea 92**

`<h3 class="font-titulo text-xl font-bold">Individual</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 93**

`<p class="text-2xl font-bold">$55.000 <span class="text-base font-normal">por persona</span></p>`

Párrafo de texto. Clases: `text-2xl`, `font-bold`, `text-base`, `font-normal`. Consulta su significado en el glosario.

**Línea 94**

`</div>`

Cierra el elemento div.

**Línea 95**

`<ul class="flex grow flex-col gap-3">`

Contenido HTML de la página. Clases: `flex`, `grow`, `flex-col`, `gap-3`. Consulta su significado en el glosario.

**Línea 96**

`<li>Bicicleta y casco</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 97**

`<li>Luces LED y chaleco</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 98**

`<li>Guía certificado</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 99**

`<li>Hidratación</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 100**

`</ul>`

Cierra el elemento ul.

**Línea 101**

`<a href="#inscripcion" class="btn-secundario">Elegir Individual</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 102**

`</article>`

Cierra el elemento article.

**Línea 103**

`<article class="relative flex h-full flex-col justify-between gap-6 rounded-xl border border-t-4 border-azul-noche bg-amarillo-farol p-6 text-azul-noche dark:border-amarillo-farol dark:bg-azul-noche dark:text-crema">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `relative`, `flex`, `h-full`, `flex-col`, `justify-between`, `gap-6`, `rounded-xl`, `border`, `border-t-4`, `border-azul-noche`, `bg-amarillo-farol`, `p-6`, `text-azul-noche`, `dark:border-amarillo-farol`, `dark:bg-azul-noche`, `dark:text-crema`. Consulta su significado en el glosario.

**Línea 104**

`<span class="absolute -top-4 left-6 rounded-full bg-azul-noche px-3 py-1 text-sm font-semibold text-white dark:bg-amarillo-farol dark:text-azul-noche">Más elegido</span>`

Texto corto, etiqueta de nivel o número de paso. Clases: `absolute`, `-top-4`, `left-6`, `rounded-full`, `bg-azul-noche`, `px-3`, `py-1`, `text-sm`, `font-semibold`, `text-white`, `dark:bg-amarillo-farol`, `dark:text-azul-noche`. Consulta su significado en el glosario.

**Línea 105**

`<div class="space-y-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-3`. Consulta su significado en el glosario.

**Línea 106**

`<h3 class="font-titulo text-xl font-bold">Pareja</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 107**

`<p class="text-2xl font-bold">$99.000 <span class="text-base font-normal">las dos personas</span></p>`

Párrafo de texto. Clases: `text-2xl`, `font-bold`, `text-base`, `font-normal`. Consulta su significado en el glosario.

**Línea 108**

`</div>`

Cierra el elemento div.

**Línea 109**

`<ul class="flex grow flex-col gap-3">`

Contenido HTML de la página. Clases: `flex`, `grow`, `flex-col`, `gap-3`. Consulta su significado en el glosario.

**Línea 110**

`<li>Todo lo del plan Individual</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 111**

`<li>Foto del recorrido</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 112**

`<li>Snack para dos</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 113**

`<li>Prioridad en la ruta</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 114**

`</ul>`

Cierra el elemento ul.

**Línea 115**

`<a href="#inscripcion" class="btn-secundario">Elegir Pareja</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 116**

`</article>`

Cierra el elemento article.

**Línea 117**

`<article class="flex h-full flex-col justify-between gap-6 rounded-xl border border-gris-asfalto bg-white p-6 dark:border-crema dark:bg-gris-asfalto">`

Card de una ruta; tiene imagen, título, nivel, descripción y enlace. Clases: `flex`, `h-full`, `flex-col`, `justify-between`, `gap-6`, `rounded-xl`, `border`, `border-gris-asfalto`, `bg-white`, `p-6`, `dark:border-crema`, `dark:bg-gris-asfalto`. Consulta su significado en el glosario.

**Línea 118**

`<div class="space-y-3">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-3`. Consulta su significado en el glosario.

**Línea 119**

`<h3 class="font-titulo text-xl font-bold">Grupo (4 a 8)</h3>`

Título de una card o de un paso. Clases: `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 120**

`<p class="text-2xl font-bold">$45.000 <span class="text-base font-normal">por persona</span></p>`

Párrafo de texto. Clases: `text-2xl`, `font-bold`, `text-base`, `font-normal`. Consulta su significado en el glosario.

**Línea 121**

`</div>`

Cierra el elemento div.

**Línea 122**

`<ul class="flex grow flex-col gap-3">`

Contenido HTML de la página. Clases: `flex`, `grow`, `flex-col`, `gap-3`. Consulta su significado en el glosario.

**Línea 123**

`<li>Todo lo del plan Individual</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 124**

`<li>Guía exclusivo</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 125**

`<li>Horario a elección</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 126**

`<li>Fotos del grupo</li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 127**

`</ul>`

Cierra el elemento ul.

**Línea 128**

`<a href="#inscripcion" class="btn-secundario">Elegir Grupo</a>`

Enlace: href indica el destino; # busca una sección de esta página. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 129**

`</article>`

Cierra el elemento article.

**Línea 130**

`</div>`

Cierra el elemento div.

**Línea 131**

`</div>`

Cierra el elemento div.

**Línea 132**

`</section>`

Cierra el elemento section.

**Línea 133**

`<section id="inscripcion" class="bg-amarillo-farol text-azul-noche dark:bg-gris-asfalto dark:text-crema">`

Bloque de contenido. Su id permite llegar con un enlace #id. Clases: `bg-amarillo-farol`, `text-azul-noche`, `dark:bg-gris-asfalto`, `dark:text-crema`. Consulta su significado en el glosario.

**Línea 134**

`<div class="mx-auto max-w-6xl space-y-8 px-6 py-12 lg:py-20">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `max-w-6xl`, `space-y-8`, `px-6`, `py-12`, `lg:py-20`. Consulta su significado en el glosario.

**Línea 135**

`<h2 class="font-titulo text-2xl font-bold lg:text-3xl">Inscríbete a Rueda Nocturna</h2>`

Título de una sección. Clases: `font-titulo`, `text-2xl`, `font-bold`, `lg:text-3xl`. Consulta su significado en el glosario.

**Línea 136**

`<p>Todos los campos son obligatorios. El celular debe tener 10 dígitos y comenzar por 3.</p>`

Párrafo de texto.

**Línea 137**

`<form id="formulario-inscripcion" action="#inscripcion" method="post" class="space-y-6">`

Agrupa los datos que se van a enviar. method="post" evita ponerlos en la URL; JavaScript controla el destino. Clases: `space-y-6`. Consulta su significado en el glosario.

**Línea 138**

`<fieldset class="rounded-xl border border-gris-asfalto p-6 dark:border-crema">`

Agrupa campos relacionados. Clases: `rounded-xl`, `border`, `border-gris-asfalto`, `p-6`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 139**

`<legend class="px-2 font-titulo text-xl font-bold">Tus datos</legend>`

Título del conjunto de campos. Clases: `px-2`, `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 140**

`<div class="grid grid-cols-1 gap-6 md:grid-cols-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `md:grid-cols-2`. Consulta su significado en el glosario.

**Línea 141**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 142**

`<label for="nombre" class="block font-semibold">Nombre completo</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 143**

`<input id="nombre" name="nombre" type="text" autocomplete="name" minlength="3" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Control de formulario. type indica si recibe texto, correo, teléfono, número, una elección o una casilla. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. minlength exige al menos 3 caracteres.

**Línea 144**

`</div>`

Cierra el elemento div.

**Línea 145**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 146**

`<label for="correo" class="block font-semibold">Correo electrónico</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 147**

`<input id="correo" name="correo" type="email" autocomplete="email" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Control de formulario. type indica si recibe texto, correo, teléfono, número, una elección o una casilla. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. El navegador revisa el formato del correo.

**Línea 148**

`</div>`

Cierra el elemento div.

**Línea 149**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 150**

`<label for="celular" class="block font-semibold">Celular</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 151**

`<input id="celular" name="celular" type="tel" autocomplete="tel" inputmode="numeric" pattern="3[0-9]{9}" maxlength="10" title="Escribe 10 dígitos, comenzando por 3, sin espacios" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Control de formulario. type indica si recibe texto, correo, teléfono, número, una elección o una casilla. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. pattern exige un 3 seguido de otros 9 dígitos; title explica ese formato.

**Línea 152**

`</div>`

Cierra el elemento div.

**Línea 153**

`</div>`

Cierra el elemento div.

**Línea 154**

`</fieldset>`

Cierra el elemento fieldset.

**Línea 155**

`<fieldset class="rounded-xl border border-gris-asfalto p-6 dark:border-crema">`

Agrupa campos relacionados. Clases: `rounded-xl`, `border`, `border-gris-asfalto`, `p-6`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 156**

`<legend class="px-2 font-titulo text-xl font-bold">Tu salida</legend>`

Título del conjunto de campos. Clases: `px-2`, `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 157**

`<div class="grid grid-cols-1 gap-6 md:grid-cols-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `grid`, `grid-cols-1`, `gap-6`, `md:grid-cols-2`. Consulta su significado en el glosario.

**Línea 158**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 159**

`<label for="ruta" class="block font-semibold">Ruta</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 160**

`<select id="ruta" name="ruta" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Lista de opciones; required obliga a elegir una con valor. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar.

**Línea 161**

`<option value="">Elige una ruta</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 162**

`<option value="rio-parques">Río y Parques</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 163**

`<option value="sabores-barrio">Sabores de Barrio</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 164**

`<option value="reto-palmas">Reto Las Palmas</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 165**

`</select>`

Cierra el elemento select.

**Línea 166**

`</div>`

Cierra el elemento div.

**Línea 167**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 168**

`<label for="dia" class="block font-semibold">Día de salida</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 169**

`<select id="dia" name="dia" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Lista de opciones; required obliga a elegir una con valor. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar.

**Línea 170**

`<option value="">Elige un día</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 171**

`<option value="jueves">Jueves</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 172**

`<option value="viernes">Viernes</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 173**

`<option value="sabado">Sábado</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 174**

`</select>`

Cierra el elemento select.

**Línea 175**

`</div>`

Cierra el elemento div.

**Línea 176**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 177**

`<label for="acompanantes" class="block font-semibold">Número de acompañantes (0 a 3)</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 178**

`<input id="acompanantes" name="acompanantes" type="number" min="0" max="3" step="1" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Control de formulario. type indica si recibe texto, correo, teléfono, número, una elección o una casilla. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. min y max permiten entre 0 y 3 acompañantes; step=1 rechaza decimales.

**Línea 179**

`</div>`

Cierra el elemento div.

**Línea 180**

`<div class="space-y-2">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`. Consulta su significado en el glosario.

**Línea 181**

`<label for="experiencia" class="block font-semibold">Nivel de experiencia</label>`

Nombre del campo. for coincide con el id del input. Clases: `block`, `font-semibold`. Consulta su significado en el glosario.

**Línea 182**

`<select id="experiencia" name="experiencia" required class="w-full rounded-lg border border-gris-asfalto bg-white px-4 py-3 text-gris-asfalto focus:outline-2 focus:outline-offset-2 focus:outline-verde-ruta dark:border-crema dark:bg-gris-asfalto dark:text-crema dark:focus:outline-amarillo-farol">`

Lista de opciones; required obliga a elegir una con valor. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar.

**Línea 183**

`<option value="">Elige tu nivel</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 184**

`<option value="principiante">Principiante</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 185**

`<option value="intermedio">Intermedio</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 186**

`<option value="avanzado">Avanzado</option>`

Una opción de la lista. value es el dato que se envía.

**Línea 187**

`</select>`

Cierra el elemento select.

**Línea 188**

`</div>`

Cierra el elemento div.

**Línea 189**

`</div>`

Cierra el elemento div.

**Línea 190**

`</fieldset>`

Cierra el elemento fieldset.

**Línea 191**

`<fieldset class="rounded-xl border border-gris-asfalto p-6 dark:border-crema">`

Agrupa campos relacionados. Clases: `rounded-xl`, `border`, `border-gris-asfalto`, `p-6`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 192**

`<legend class="px-2 font-titulo text-xl font-bold">¿Tienes bicicleta propia?</legend>`

Título del conjunto de campos. Clases: `px-2`, `font-titulo`, `text-xl`, `font-bold`. Consulta su significado en el glosario.

**Línea 193**

`<div class="flex flex-wrap gap-6">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `flex`, `flex-wrap`, `gap-6`. Consulta su significado en el glosario.

**Línea 194**

`<label for="bici-si" class="flex items-center gap-2"><input id="bici-si" name="bicicleta" type="radio" value="si" required class="h-5 w-5 accent-azul-noche focus:outline-2 focus:outline-offset-2 dark:accent-amarillo-farol"> Sí</label>`

Nombre del campo. for coincide con el id del input. Clases: `flex`, `items-center`, `gap-2`, `h-5`, `w-5`, `accent-azul-noche`, `focus:outline-2`, `focus:outline-offset-2`, `dark:accent-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. Los radios con el mismo name permiten escoger una sola respuesta.

**Línea 195**

`<label for="bici-no" class="flex items-center gap-2"><input id="bici-no" name="bicicleta" type="radio" value="no" required class="h-5 w-5 accent-azul-noche focus:outline-2 focus:outline-offset-2 dark:accent-amarillo-farol"> No</label>`

Nombre del campo. for coincide con el id del input. Clases: `flex`, `items-center`, `gap-2`, `h-5`, `w-5`, `accent-azul-noche`, `focus:outline-2`, `focus:outline-offset-2`, `dark:accent-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. Los radios con el mismo name permiten escoger una sola respuesta.

**Línea 196**

`</div>`

Cierra el elemento div.

**Línea 197**

`</fieldset>`

Cierra el elemento fieldset.

**Línea 198**

`<p id="condiciones-texto">Condiciones: lleva tu documento de identidad, usa casco y sigue las indicaciones del guía durante el recorrido.</p>`

Párrafo de texto.

**Línea 199**

`<label for="condiciones" class="flex items-center gap-3"><input id="condiciones" name="condiciones" type="checkbox" value="aceptadas" aria-describedby="condiciones-texto" required class="h-5 w-5 shrink-0 accent-azul-noche focus:outline-2 focus:outline-offset-2 dark:accent-amarillo-farol"> Acepto las condiciones del recorrido</label>`

Nombre del campo. for coincide con el id del input. Clases: `flex`, `items-center`, `gap-3`, `h-5`, `w-5`, `shrink-0`, `accent-azul-noche`, `focus:outline-2`, `focus:outline-offset-2`, `dark:accent-amarillo-farol`. Consulta su significado en el glosario. required impide dejar este dato sin completar. La casilla debe estar marcada para aceptar las condiciones.

**Línea 200**

`<button type="submit" class="btn-secundario">Enviar inscripción</button>`

Botón; type="submit" inicia la validación nativa antes de emitir submit. Clases: `btn-secundario`. Consulta su significado en el glosario.

**Línea 201**

`<p id="estado-inscripcion" role="status" class="font-semibold">El envío de inscripciones todavía no está habilitado.</p>`

Párrafo de texto. Clases: `font-semibold`. Consulta su significado en el glosario. Anuncia el resultado sin mover el foco del teclado.

**Línea 202**

`</form>`

Cierra el elemento form.

**Línea 203**

`<noscript>Activa JavaScript para comprobar la disponibilidad del envío.</noscript>`

Aviso visible cuando JavaScript está desactivado.

**Línea 204**

`</div>`

Cierra el elemento div.

**Línea 205**

`</section>`

Cierra el elemento section.

**Línea 206**

`</main>`

Cierra el elemento main.

**Línea 207**

`<footer class="border-t border-gris-asfalto dark:border-crema">`

Pie con marca, contacto y horario. Clases: `border-t`, `border-gris-asfalto`, `dark:border-crema`. Consulta su significado en el glosario.

**Línea 208**

`<div class="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-8 md:flex-row">`

Agrupa elementos para distribuirlos o separar espacios. Clases: `mx-auto`, `flex`, `max-w-6xl`, `flex-col`, `justify-between`, `gap-6`, `px-6`, `py-8`, `md:flex-row`. Consulta su significado en el glosario.

**Línea 209**

`<div class="space-y-2"><p class="font-titulo font-bold">Rueda Libre</p><p>Medellín en dos ruedas.</p></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`. Consulta su significado en el glosario.

**Línea 210**

`<div class="space-y-2"><p class="font-titulo font-bold">Contacto</p><a href="../paginas/encuentranos.html" class="underline">Encuéntranos</a><p>+57 300 000 0000</p><a href="mailto:hola@ruedalibre.example" class="break-all underline">hola@ruedalibre.example</a></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`, `underline`, `break-all`. Consulta su significado en el glosario.

**Línea 211**

`<div class="space-y-2"><p class="font-titulo font-bold">Rueda Nocturna</p><p>Jueves a sábado</p><a href="componentes.html" class="underline">Kit de componentes</a></div>`

Agrupa elementos para distribuirlos o separar espacios. Clases: `space-y-2`, `font-titulo`, `font-bold`, `underline`. Consulta su significado en el glosario.

**Línea 212**

`</div>`

Cierra el elemento div.

**Línea 213**

`</footer>`

Cierra el elemento footer.

**Línea 214**

`<script src="inscripcion.js" defer></script>`

Carga el JavaScript externo; defer espera a que el HTML esté preparado.

**Línea 215**

`</body>`

Cierra el elemento body.

**Línea 216**

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

Control de formulario. type indica si recibe texto, correo, teléfono, número, una elección o una casilla. Clases: `w-full`, `rounded-lg`, `border`, `border-gris-asfalto`, `bg-white`, `px-4`, `py-3`, `text-gris-asfalto`, `focus:outline-2`, `focus:outline-offset-2`, `focus:outline-verde-ruta`, `dark:border-crema`, `dark:bg-gris-asfalto`, `dark:text-crema`, `dark:focus:outline-amarillo-farol`. Consulta su significado en el glosario.

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

## nocturna/inscripcion.js

**Línea 1**

`const formulario = document.querySelector('#formulario-inscripcion');`

Busca el formulario por su id para escuchar su envío.

**Línea 2**

`const estado = document.querySelector('#estado-inscripcion');`

Busca el mensaje con role="status", que anuncia cambios también a lectores de pantalla.

**Línea 3**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 4**

`// Reemplazar por la URL real del servicio de inscripciones cuando esté disponible.`

Comentario: indica dónde configurar el receptor real. No se ejecuta.

**Línea 5**

`const destino = '';`

URL del servicio real. Vacía significa que todavía no se pueden recibir datos.

**Línea 6**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 7**

`if (destino) estado.textContent = 'Completa tus datos para enviar la inscripción.';`

Si existe un destino, cambia el aviso inicial para invitar a completar el formulario.

**Línea 8**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 9**

`formulario.addEventListener('submit', async (evento) => {`

Escucha submit. El navegador llega aquí solo si los campos cumplen required, minlength y las demás reglas. async permite esperar la respuesta.

**Línea 10**

`evento.preventDefault();`

Evita que el navegador haga un POST directamente al HTML de GitHub Pages.

**Línea 11**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 12**

`if (!destino) {`

Comprueba si aún falta configurar el receptor.

**Línea 13**

`estado.textContent = 'El envío aún no está habilitado. Tus datos no se han enviado.';`

Muestra un estado real del envío. textContent escribe texto sin interpretarlo como HTML.

**Línea 14**

`return;`

Sale sin mandar datos a ninguna parte.

**Línea 15**

`}`

Cierra la llamada o el bloque que se abrió en las líneas anteriores.

**Línea 16**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 17**

`const boton = formulario.querySelector('button[type="submit"]');`

Busca el botón de envío dentro del formulario.

**Línea 18**

`boton.disabled = true;`

Desactiva el botón mientras se envía para evitar clics repetidos.

**Línea 19**

`estado.textContent = 'Enviando inscripción…';`

Muestra un estado real del envío. textContent escribe texto sin interpretarlo como HTML.

**Línea 20**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 21**

`try {`

Abre el bloque donde puede fallar la conexión.

**Línea 22**

`const respuesta = await fetch(destino, {`

fetch contacta con el servicio configurado; await espera su respuesta.

**Línea 23**

`method: 'POST',`

Envía los datos en el cuerpo de una petición POST.

**Línea 24**

`body: new FormData(formulario),`

Recoge los controles con name, incluyendo las opciones elegidas y la casilla marcada.

**Línea 25**

`headers: { Accept: 'application/json' }`

Pide una respuesta JSON, como la que entregan los servicios de formularios.

**Línea 26**

`});`

Cierra la llamada o el bloque que se abrió en las líneas anteriores.

**Línea 27**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 28**

`if (!respuesta.ok) throw new Error('No se pudo enviar');`

Los estados HTTP de error provocan el salto al bloque catch.

**Línea 29**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 30**

`estado.textContent = 'Recibimos tu inscripción. Pronto nos pondremos en contacto.';`

Muestra un estado real del envío. textContent escribe texto sin interpretarlo como HTML.

**Línea 31**

`formulario.reset();`

Limpia los campos solo después de una respuesta correcta.

**Línea 32**

`} catch {`

Captura los errores. El mensaje explica que se puede reintentar y los datos se conservan.

**Línea 33**

`estado.textContent = 'No se pudo enviar la inscripción. Intenta de nuevo; tus datos siguen en el formulario.';`

Muestra un estado real del envío. textContent escribe texto sin interpretarlo como HTML.

**Línea 34**

`} finally {`

Se ejecuta siempre para volver a habilitar el botón.

**Línea 35**

`boton.disabled = false;`

Reactiva el botón al terminar, tanto si funcionó como si falló.

**Línea 36**

`}`

Cierra la llamada o el bloque que se abrió en las líneas anteriores.

**Línea 37**

`});`

Cierra la llamada o el bloque que se abrió en las líneas anteriores.

## css/marca.css

**Línea 1**

`:root {`

Variables globales compartidas por las páginas de Bootstrap.

**Línea 2**

`--color-verde-ruta: #0284c7;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 3**

`--color-azul-noche: #0f172a;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 4**

`--color-naranja-pedal: #f59e0b;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 5**

`--color-gris-asfalto: #334155;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 6**

`--color-crema: #f8fafc;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 7**

`--color-amarillo-farol: #ffd166;`

Define uno de los seis colores, con el mismo valor que @theme.

**Línea 8**

`--color-principal: var(--color-verde-ruta);`

Reutiliza el valor de otra variable para conservar los nombres del CSS anterior.

**Línea 9**

`--color-oscuro: var(--color-azul-noche);`

Reutiliza el valor de otra variable para conservar los nombres del CSS anterior.

**Línea 10**

`--color-texto: var(--color-gris-asfalto);`

Reutiliza el valor de otra variable para conservar los nombres del CSS anterior.

**Línea 11**

`--color-fondo: var(--color-crema);`

Reutiliza el valor de otra variable para conservar los nombres del CSS anterior.

**Línea 12**

`--color-borde: var(--color-gris-asfalto);`

Reutiliza el valor de otra variable para conservar los nombres del CSS anterior.

**Línea 13**

`--fuente: "Open Sans", sans-serif;`

Define Open Sans como fuente del cuerpo; sans-serif es la alternativa.

**Línea 14**

`--bs-primary: var(--color-verde-ruta);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 15**

`--bs-primary-rgb: 2, 132, 199;`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 16**

`--bs-secondary: var(--color-naranja-pedal);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 17**

`--bs-secondary-rgb: 245, 158, 11;`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 18**

`--bs-dark: var(--color-azul-noche);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 19**

`--bs-dark-rgb: 15, 23, 42;`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 20**

`--bs-body-color: var(--color-gris-asfalto);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 21**

`--bs-body-bg: var(--color-crema);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 22**

`--bs-body-font-family: "Open Sans", sans-serif;`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 23**

`--bs-link-color: var(--color-azul-noche);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 24**

`--bs-link-hover-color: var(--color-gris-asfalto);`

Conecta una variable de Bootstrap con el color o la fuente de la marca. Las terminadas en rgb se usan en utilidades con opacidad.

**Línea 25**

`}`

Cierra las variables globales o la regla de foco.

**Línea 26**

`(vacía)`

Línea vacía: separa bloques para leer mejor.

**Línea 27**

`body { font-family: var(--fuente); }`

Usa Open Sans en el cuerpo y Montserrat en los títulos.

**Línea 28**

`h1, h2, h3 { font-family: "Montserrat", sans-serif; }`

Usa Open Sans en el cuerpo y Montserrat en los títulos.

**Línea 29**

`header { background: var(--color-amarillo-farol); }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 30**

`a, #menu a { color: var(--color-azul-noche); }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 31**

`#menu a { display: inline-block; }`

Hace que el enlace respete el relleno y pueda bajar de línea con el menú.

**Línea 32**

`#menu a:hover { background: var(--color-azul-noche); color: white; }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 33**

`a:focus-visible, button:focus-visible, input:focus-visible,`

Aplica el contorno al navegar con teclado. Los selectores separados por comas comparten la regla.

**Línea 34**

`select:focus-visible, textarea:focus-visible {`

Aplica el contorno al navegar con teclado. Los selectores separados por comas comparten la regla.

**Línea 35**

`outline: 3px solid var(--color-azul-noche);`

Añade un contorno visible de 3 px para navegar con teclado.

**Línea 36**

`outline-offset: 3px;`

Separa 3 px el contorno del elemento.

**Línea 37**

`}`

Cierra las variables globales o la regla de foco.

**Línea 38**

`button[type="submit"] { background: var(--color-azul-noche); }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 39**

`.btn-whatsapp { background: var(--color-azul-noche); color: white; }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 40**

`.row > * { min-width: 0; }`

Permite que las columnas y fieldsets se reduzcan sin causar scroll horizontal.

**Línea 41**

`fieldset { min-width: 0; }`

Permite que las columnas y fieldsets se reduzcan sin causar scroll horizontal.

**Línea 42**

`table { border: 1px solid var(--color-gris-asfalto); }`

Deja el borde de las tablas en CSS en lugar del atributo HTML antiguo.

**Línea 43**

`.campana { min-height: 19rem; background: var(--color-azul-noche); color: white; }`

Da la misma altura mínima al contenido de las diapositivas del carrusel.

**Línea 44**

`.campana h2 { color: var(--color-amarillo-farol); }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

**Línea 45**

`.campana a { background: var(--color-amarillo-farol); color: var(--color-azul-noche); }`

Aplica colores de marca a los elementos indicados, manteniendo el contraste del texto.

## Glosario de clases utilizadas

Un prefijo cambia cuándo se aplica una clase. Por ejemplo, grid-cols-1 es la base del celular y lg:grid-cols-3 la cambia desde 1024 px. 1 rem suele equivaler a 16 px.

- `-top-4`: coloca la etiqueta 1 rem por encima del borde.
- `absolute`: saca la etiqueta del flujo para no mover el contenido.
- `accent-azul-noche`: color de los radios y la casilla en claro.
- `bg-amarillo-farol`: fondo de color amarillo-farol.
- `bg-azul-noche`: fondo de color azul-noche.
- `bg-crema`: fondo de color crema.
- `bg-white`: fondo de color white.
- `block`: elemento de bloque.
- `border`: borde de 1 px.
- `border-azul-noche`: borde de color azul-noche.
- `border-b`: borde inferior.
- `border-gris-asfalto`: borde de color gris-asfalto.
- `border-t`: borde superior.
- `border-t-4`: borde superior de 4 px.
- `break-all`: permite cortar el correo si no cabe en una línea.
- `btn-principal`: reúne las utilidades del botón amarillo usando @apply.
- `btn-secundario`: reúne las utilidades del botón oscuro y su versión clara en modo oscuro.
- `dark:accent-amarillo-farol`: Si el sistema usa modo oscuro: color de los radios y la casilla en oscuro.
- `dark:bg-amarillo-farol`: Si el sistema usa modo oscuro: fondo de color amarillo-farol.
- `dark:bg-azul-noche`: Si el sistema usa modo oscuro: fondo de color azul-noche.
- `dark:bg-crema`: Si el sistema usa modo oscuro: fondo de color crema.
- `dark:bg-gris-asfalto`: Si el sistema usa modo oscuro: fondo de color gris-asfalto.
- `dark:border-amarillo-farol`: Si el sistema usa modo oscuro: borde de color amarillo-farol.
- `dark:border-crema`: Si el sistema usa modo oscuro: borde de color crema.
- `dark:focus-visible:outline-amarillo-farol`: Si el sistema usa modo oscuro: Al recibir foco visible, por ejemplo con Tab: contorno de foco de color amarillo-farol.
- `dark:focus:outline-amarillo-farol`: Si el sistema usa modo oscuro: Cuando el campo recibe foco: contorno de foco de color amarillo-farol.
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
- `focus:outline-2`: Cuando el campo recibe foco: contorno de 2 px.
- `focus:outline-offset-2`: Cuando el campo recibe foco: separa el contorno 2 px.
- `focus:outline-verde-ruta`: Cuando el campo recibe foco: contorno de foco de color verde-ruta.
- `font-bold`: letra en negrita (700).
- `font-cuerpo`: Open Sans, definida en @theme.
- `font-normal`: peso de letra normal (400).
- `font-semibold`: letra seminegrita (600).
- `font-titulo`: Montserrat, definida en @theme.
- `gap-2`: separación entre hijos de 0.5 rem.
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
- `h-5`: alto de 1.25 rem.
- `h-64`: alto de 16 rem.
- `h-full`: ocupa toda la altura disponible de la fila.
- `hidden`: oculta el elemento.
- `hover:bg-gris-asfalto`: Al pasar el puntero: fondo de color gris-asfalto.
- `hover:bg-white`: Al pasar el puntero: fondo de color white.
- `hover:underline`: Al pasar el puntero: subrayado.
- `inline-block`: bloque que fluye con el texto.
- `inline-flex`: Flexbox que ocupa el ancho de su contenido.
- `items-center`: centra los hijos en el eje cruzado.
- `justify-between`: separa los hijos hacia los extremos.
- `justify-center`: centra los hijos en el eje principal.
- `left-6`: separa la etiqueta 1.5 rem del lado izquierdo.
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
- `px-2`: relleno horizontal de 0.5 rem.
- `px-3`: relleno horizontal de 0.75 rem.
- `px-4`: relleno horizontal de 1 rem.
- `px-6`: relleno horizontal de 1.5 rem.
- `py-1`: relleno vertical de 0.25 rem.
- `py-12`: relleno vertical de 3 rem.
- `py-3`: relleno vertical de 0.75 rem.
- `py-5`: relleno vertical de 1.25 rem.
- `py-8`: relleno vertical de 2 rem.
- `relative`: sirve de referencia para un hijo con posición absoluta.
- `rounded-full`: bordes totalmente redondeados.
- `rounded-lg`: redondeo grande.
- `rounded-xl`: redondeo mayor.
- `self-start`: alinea este hijo al inicio.
- `shrink-0`: evita que el control se encoja.
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
- `text-base`: texto de 1 rem.
- `text-crema`: texto de color crema.
- `text-gris-asfalto`: texto de color gris-asfalto.
- `text-lg`: texto de 1.125 rem.
- `text-sm`: texto de 0.875 rem.
- `text-white`: texto de color white.
- `text-xl`: texto de 1.25 rem.
- `underline`: subrayado.
- `w-10`: ancho de 2.5 rem.
- `w-12`: ancho de 3 rem.
- `w-5`: ancho de 1.25 rem.
- `w-full`: ocupa todo el ancho disponible.

## Archivos auxiliares

- package-lock.json fija las versiones para repetir la instalación. Lo actualiza npm.
- output.css lo genera la CLI; se sube para que GitHub Pages funcione sin instalar nada.
- bitacora.txt guarda pruebas, contraste, medidas y la recomendación de framework.
- En el index.html principal se agregó un enlace a ./nocturna/index.html. ./ significa la carpeta actual; ../ sube una carpeta.
