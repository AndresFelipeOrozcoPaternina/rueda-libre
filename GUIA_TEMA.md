# Botón de modo oscuro

El botón está en la landing y en el kit. Al principio sigue el sistema; al elegir un tema lo guarda en el navegador. No hace falta una librería.

## HTML y CSS

- El botón usa type="button" para no enviar un formulario y reutiliza btn-secundario del kit.
- El id cambiar-tema permite encontrarlo desde JavaScript.
- tema.js se carga en head para aplicar la elección antes de pintar la página.
- @custom-variant dark conecta las utilidades dark: con la clase dark de html.
- color-scheme también cambia los controles nativos, como las listas del formulario.

## nocturna/tema.js línea por línea

**Línea 1**

`const sistema = window.matchMedia('(prefers-color-scheme: dark)');`

Consulta si el sistema prefiere el tema oscuro y permite escuchar sus cambios.

**Línea 2**

`let temaGuardado = null;`

Empieza sin una elección manual.

**Línea 3**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 4**

`try {`

Intenta acceder al almacenamiento; algunos navegadores pueden bloquearlo.

**Línea 5**

`temaGuardado = localStorage.getItem('rueda-libre-tema');`

Lee la elección guardada en este navegador.

**Línea 6**

`} catch {}`

Si el almacenamiento falla, la página sigue funcionando sin guardar la elección.

**Línea 7**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 8**

`if (temaGuardado !== 'dark' && temaGuardado !== 'light') temaGuardado = null;`

Solo acepta dark o light; ignora valores distintos.

**Línea 9**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 10**

`function aplicarTema(oscuro) {`

Define la función que aplica el tema. oscuro es verdadero o falso.

**Línea 11**

`document.documentElement.classList.toggle('dark', oscuro);`

Añade o quita la clase dark en html. Las utilidades dark: responden a esa clase.

**Línea 12**

`const boton = document.querySelector('#cambiar-tema');`

Busca el botón por su id.

**Línea 13**

`if (boton) boton.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';`

Muestra el nombre del tema al que se puede cambiar. La comprobación permite ejecutar el script antes de crear el botón.

**Línea 14**

`}`

Cierra la función.

**Línea 15**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 16**

`aplicarTema(temaGuardado ? temaGuardado === 'dark' : sistema.matches);`

Aplica la elección guardada; si no existe, usa la preferencia del sistema antes de mostrar la página.

**Línea 17**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 18**

`document.addEventListener('DOMContentLoaded', () => {`

Espera a que todos los elementos del HTML estén disponibles.

**Línea 19**

`aplicarTema(document.documentElement.classList.contains('dark'));`

Actualiza el texto del botón según el tema que ya está aplicado.

**Línea 20**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 21**

`document.querySelector('#cambiar-tema').addEventListener('click', () => {`

Escucha la activación del botón, también con Enter o espacio desde el teclado.

**Línea 22**

`const oscuro = !document.documentElement.classList.contains('dark');`

Invierte el estado actual: si era claro pasa a oscuro y al contrario.

**Línea 23**

`temaGuardado = oscuro ? 'dark' : 'light';`

Conserva la elección manual en una variable.

**Línea 24**

`aplicarTema(oscuro);`

Aplica de inmediato el tema elegido.

**Línea 25**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 26**

`try {`

Intenta acceder al almacenamiento; algunos navegadores pueden bloquearlo.

**Línea 27**

`localStorage.setItem('rueda-libre-tema', temaGuardado);`

Guarda el valor para conservarlo al recargar y al ir al kit.

**Línea 28**

`} catch {}`

Si el almacenamiento falla, la página sigue funcionando sin guardar la elección.

**Línea 29**

`});`

Cierra el evento que se abrió antes.

**Línea 30**

`});`

Cierra el evento que se abrió antes.

**Línea 31**

`(vacía)`

Separa los bloques para leerlos mejor.

**Línea 32**

`sistema.addEventListener('change', (evento) => {`

Escucha cambios en la preferencia de color del sistema.

**Línea 33**

`if (!temaGuardado) aplicarTema(evento.matches);`

Sigue el sistema solo mientras no haya una elección manual.

**Línea 34**

`});`

Cierra el evento que se abrió antes.

## Pruebas

Se comprobó el cambio con teclado, la recarga, el paso de la landing al kit y los anchos 360, 768 y 1280 px. También se probó con el almacenamiento bloqueado: el botón sigue funcionando, aunque no puede recordar la elección.
