const formulario = document.querySelector('#formulario-inscripcion');
const estado = document.querySelector('#estado-inscripcion');

// Reemplazar por la URL real del servicio de inscripciones cuando esté disponible.
const destino = '';

if (destino) estado.textContent = 'Completa tus datos para enviar la inscripción.';

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    if (!destino) {
        estado.textContent = 'El envío aún no está habilitado. Tus datos no se han enviado.';
        return;
    }

    const boton = formulario.querySelector('button[type="submit"]');
    boton.disabled = true;
    estado.textContent = 'Enviando inscripción…';

    try {
        const respuesta = await fetch(destino, {
            method: 'POST',
            body: new FormData(formulario),
            headers: { Accept: 'application/json' }
        });

        if (!respuesta.ok) throw new Error('No se pudo enviar');

        estado.textContent = 'Recibimos tu inscripción. Pronto nos pondremos en contacto.';
        formulario.reset();
    } catch {
        estado.textContent = 'No se pudo enviar la inscripción. Intenta de nuevo; tus datos siguen en el formulario.';
    } finally {
        boton.disabled = false;
    }
});
