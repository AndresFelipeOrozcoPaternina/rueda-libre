# Guía de integración: retos 10 y 12

La guía principal GUIA_NOCTURNA.md explica toda la landing, el JavaScript y marca.css línea por línea. Aquí están las líneas de los menús, del carrusel y de la conexión del formulario de reservas. Los números corresponden a esta rama, que conserva comentarios de estudio anteriores.

## index.html

**Línea 23**

`<link rel="stylesheet" href="css/marca.css">`

Carga la marca después de los estilos locales para compartir colores y fuentes con Tailwind.

**Línea 58**

`<nav class="navbar" aria-label="Navegación principal">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 60**

`<ul id="menu" class="navbar-nav flex-row flex-wrap justify-content-center align-items-center gap-2 p-0 m-0">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 61**

`<li><a href="./paginas/tarifas.html">Tarifas</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 62**

`<li><a href="./nocturna/index.html">Rueda Nocturna</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 63**

`<li><a href="./paginas/encuentranos.html">Encuentranos</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 64**

`<li><a href="./paginas/reservas.html">Reservar ahora</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 65**

`</ul>`

Cierra el elemento ul.

**Línea 66**

`</nav>`

Cierra el elemento nav.

**Línea 70**

`<section id="campanas" class="container p-3 mb-4" aria-label="Campañas y recorridos">`

Bloque de contenido. Su id permite llegar con un enlace #id. Las clases de Bootstrap se explican debajo.

**Línea 71**

`<div id="carrusel-inicio" class="carousel slide" data-bs-interval="false">`

Crea el carrusel con su id. data-bs-interval="false" evita el avance automático.

**Línea 72**

`<div class="carousel-inner rounded">`

Contiene las cuatro diapositivas; rounded redondea el borde.

**Línea 73**

`<div class="carousel-item active">`

Una diapositiva del carrusel. Solo la que tiene active aparece al inicio.

**Línea 74**

`<div class="campana d-flex flex-column justify-content-center align-items-center gap-3 p-4 text-center">`

Agrupa elementos para distribuirlos o separar espacios. Las clases de Bootstrap se explican debajo.

**Línea 75**

`<h2>Explora Medellín</h2>`

Título de una sección.

**Línea 76**

`<p>Conoce la ciudad a tu ritmo en dos ruedas.</p>`

Párrafo de texto.

**Línea 77**

`<a href="paginas/reservas.html" class="rounded px-4 py-3 fw-bold">Reserva tu bicicleta</a>`

Enlace: href indica el destino; # busca una sección de esta página. Las clases de Bootstrap se explican debajo.

**Línea 78**

`</div>`

Cierra el elemento div.

**Línea 79**

`</div>`

Cierra el elemento div.

**Línea 80**

`<div class="carousel-item">`

Una diapositiva del carrusel. Solo la que tiene active aparece al inicio.

**Línea 81**

`<div class="campana d-flex flex-column justify-content-center align-items-center gap-3 p-4 text-center">`

Agrupa elementos para distribuirlos o separar espacios. Las clases de Bootstrap se explican debajo.

**Línea 82**

`<h2>Una ruta para ti</h2>`

Título de una sección.

**Línea 83**

`<p>Escoge entre Río y Parques, Sabores de Barrio y Reto Las Palmas.</p>`

Párrafo de texto.

**Línea 84**

`<a href="#nuestras-rutas" class="rounded px-4 py-3 fw-bold">Ver rutas</a>`

Enlace: href indica el destino; # busca una sección de esta página. Las clases de Bootstrap se explican debajo.

**Línea 85**

`</div>`

Cierra el elemento div.

**Línea 86**

`</div>`

Cierra el elemento div.

**Línea 87**

`<div class="carousel-item">`

Una diapositiva del carrusel. Solo la que tiene active aparece al inicio.

**Línea 88**

`<div class="campana d-flex flex-column justify-content-center align-items-center gap-3 p-4 text-center">`

Agrupa elementos para distribuirlos o separar espacios. Las clases de Bootstrap se explican debajo.

**Línea 89**

`<h2>Elige tu bicicleta</h2>`

Título de una sección.

**Línea 90**

`<p>Consulta los modelos y las tarifas de alquiler.</p>`

Párrafo de texto.

**Línea 91**

`<a href="paginas/tarifas.html" class="rounded px-4 py-3 fw-bold">Ver tarifas</a>`

Enlace: href indica el destino; # busca una sección de esta página. Las clases de Bootstrap se explican debajo.

**Línea 92**

`</div>`

Cierra el elemento div.

**Línea 93**

`</div>`

Cierra el elemento div.

**Línea 94**

`<div class="carousel-item">`

Una diapositiva del carrusel. Solo la que tiene active aparece al inicio.

**Línea 95**

`<div class="campana d-flex flex-column justify-content-center align-items-center gap-3 p-4 text-center">`

Agrupa elementos para distribuirlos o separar espacios. Las clases de Bootstrap se explican debajo.

**Línea 96**

`<h2>Rueda Nocturna</h2>`

Título de una sección.

**Línea 97**

`<p>Descubre Medellín cuando se encienden las luces.</p>`

Párrafo de texto.

**Línea 98**

`<a href="nocturna/index.html#inscripcion" class="rounded px-4 py-3 fw-bold">Inscríbete a Rueda Nocturna</a>`

Enlace: href indica el destino; # busca una sección de esta página. Las clases de Bootstrap se explican debajo.

**Línea 99**

`</div>`

Cierra el elemento div.

**Línea 100**

`</div>`

Cierra el elemento div.

**Línea 101**

`</div>`

Cierra el elemento div.

**Línea 102**

`<div class="d-flex justify-content-between gap-3 pt-3">`

Agrupa elementos para distribuirlos o separar espacios. Las clases de Bootstrap se explican debajo.

**Línea 103**

`<button type="button" class="btn btn-dark" data-bs-target="#carrusel-inicio" data-bs-slide="prev">Anterior</button>`

Botón accesible del carrusel: data-bs-target señala su id y data-bs-slide indica prev (anterior) o next (siguiente). Bootstrap maneja el cambio.

**Línea 104**

`<button type="button" class="btn btn-dark" data-bs-target="#carrusel-inicio" data-bs-slide="next">Siguiente</button>`

Botón accesible del carrusel: data-bs-target señala su id y data-bs-slide indica prev (anterior) o next (siguiente). Bootstrap maneja el cambio.

**Línea 105**

`</div>`

Cierra el elemento div.

**Línea 106**

`</div>`

Cierra el elemento div.

**Línea 107**

`</section>`

Cierra el elemento section.

## paginas/tarifas.html

**Línea 21**

`<link rel="stylesheet" href="../css/marca.css">`

Carga la marca después de los estilos locales para compartir colores y fuentes con Tailwind.

**Línea 58**

`<nav class="navbar" aria-label="Navegación principal">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 60**

`<ul id="menu" class="navbar-nav flex-row flex-wrap justify-content-center align-items-center gap-2 p-0 m-0">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 61**

`<li><a href="../nocturna/index.html">Rueda Nocturna</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 62**

`<li><a href="./reservas.html">Reservas</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 63**

`<li><a href="./encuentranos.html">Encuentranos</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 64**

`<li><a href="../index.html">Inicio</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 65**

`</ul>`

Cierra el elemento ul.

**Línea 66**

`</nav>`

Cierra el elemento nav.

## paginas/reservas.html

**Línea 21**

`<link rel="stylesheet" href="../css/marca.css">`

Carga la marca después de los estilos locales para compartir colores y fuentes con Tailwind.

**Línea 56**

`<nav class="navbar" aria-label="Navegación principal">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 58**

`<ul id="menu" class="navbar-nav flex-row flex-wrap justify-content-center align-items-center gap-2 p-0 m-0">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 59**

`<li><a href="../nocturna/index.html">Rueda Nocturna</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 60**

`<li><a href="./tarifas.html">Tarifas</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 61**

`<li><a href="./encuentranos.html">Encuentranos</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 62**

`<li><a href="../index.html">Inicio</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 63**

`</ul>`

Cierra el elemento ul.

**Línea 64**

`</nav>`

Cierra el elemento nav.

**Línea 96**

`<form id="formulario-inscripcion" action="#formulario-inscripcion" method="post">`

Agrupa los datos que se van a enviar. method="post" evita ponerlos en la URL; JavaScript controla el destino.

**Línea 252**

`<p id="estado-inscripcion" role="status">El envío de reservas todavía no está habilitado.</p>`

Párrafo de texto. Anuncia el resultado sin mover el foco del teclado.

**Línea 330**

`<script src="../nocturna/inscripcion.js" defer></script>`

Carga el JavaScript externo; defer espera a que el HTML esté preparado.

## paginas/encuentranos.html

**Línea 12**

`<link rel="stylesheet" href="../css/marca.css">`

Carga la marca después de los estilos locales para compartir colores y fuentes con Tailwind.

**Línea 19**

`<nav class="navbar" aria-label="Navegación principal">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 20**

`<ul id="menu" class="navbar-nav flex-row flex-wrap">`

nav y la lista forman la navegación de Bootstrap. flex-row y flex-wrap permiten una fila que baja de línea si no cabe.

**Línea 21**

`<li><a href="../nocturna/index.html">Rueda Nocturna</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 22**

`<li><a href="./tarifas.html">Tarifas</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 23**

`<li><a href="../index.html">Inicio</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 24**

`<li><a href="./reservas.html">Reservar ahora</a></li>`

Un elemento de la lista: puede ser un paso o un beneficio del plan.

**Línea 25**

`</ul>`

Cierra el elemento ul.

**Línea 26**

`</nav>`

Cierra el elemento nav.

## Clases de Bootstrap de estos bloques

- navbar y navbar-nav: estructura del menú.
- carousel, carousel-inner y carousel-item: carrusel, contenedor y diapositiva. active marca la visible. slide activa su transición.
- container: centra y limita el ancho según el breakpoint de Bootstrap.
- d-flex: activa Flexbox. flex-column apila; flex-row pone en fila; flex-wrap permite saltar de línea.
- justify-content-center y align-items-center: centran el contenido. justify-content-between separa los controles a los extremos.
- gap-2: 0.5 rem; gap-3: 1 rem.
- p-0 y m-0: sin relleno y sin margen. p-3: 1 rem; p-4: 1.5 rem. px-4: 1.5 rem horizontal; py-3: 1 rem vertical; pt-3: 1 rem arriba. mb-4: 1.5 rem debajo.
- text-center: centra el texto. fw-bold: negrita. rounded: esquinas redondeadas.
- btn y btn-dark: botón de Bootstrap con fondo oscuro.
- campana: clase propia de marca.css para dar color y altura mínima a cada diapositiva.

Bootstrap y Tailwind tienen escalas diferentes: p-4 en Bootstrap es 1.5 rem y en Tailwind es 1 rem. No se cargan juntos en la misma página.

## Detalles del cierre

- Se quitaron importaciones de Tailwind en el CSS de Bootstrap porque el navegador intentaba pedir un archivo inexistente.
- Se quitó border="1" de las tablas: ahora el borde está en CSS.
- Reservas carga el mismo JavaScript del formulario nocturno; todavía necesita el servicio real.
- Los pies usan el mismo correo y teléfono de ejemplo. Hay que cambiarlos por los reales antes de recibir clientes.
- README.md contiene los enlaces y las capturas; docs/demo.md organiza el recorrido, pero el ensayo con un compañero sigue pendiente.
