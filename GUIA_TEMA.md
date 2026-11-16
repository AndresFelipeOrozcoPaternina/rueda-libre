# Modo oscuro sin JavaScript propio

El tema sigue la preferencia del sistema, como pide la guia. No hay boton manual ni se guarda una elección en el navegador.

## En input.css

- @import carga Tailwind.
- @source indica donde buscar las clases del HTML.
- @layer base agrupa los estilos base.
- :root selecciona el elemento html.
- color-scheme: light dark permite que los controles nativos sigan el tema del sistema.
- No se define @custom-variant dark: se usa la variante por defecto de Tailwind.

## En el HTML

- bg-crema pone el fondo claro.
- dark:bg-azul-noche cambia el fondo cuando el sistema prefiere oscuro.
- text-gris-asfalto define el texto claro y dark:text-crema el texto del modo oscuro.
- Las cards, los bordes y los campos tienen sus propias variantes dark:.
- La landing y el kit cargan output.css, sin scripts propios.

## Como probarlo

En Chrome abre DevTools, entra a Rendering y cambia prefers-color-scheme entre light y dark. Tambien puedes cambiar el tema del sistema.

Los formularios usan required, minlength, pattern, min y max de HTML. El envio queda deshabilitado hasta configurar un receptor real.
El carrusel conserva el bundle oficial de Bootstrap y el prototipo conserva el Play CDN de Tailwind.
