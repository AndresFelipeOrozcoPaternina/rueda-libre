const sistema = window.matchMedia('(prefers-color-scheme: dark)');
let temaGuardado = null;

try {
    temaGuardado = localStorage.getItem('rueda-libre-tema');
} catch {}

if (temaGuardado !== 'dark' && temaGuardado !== 'light') temaGuardado = null;

function aplicarTema(oscuro) {
    document.documentElement.classList.toggle('dark', oscuro);
    const boton = document.querySelector('#cambiar-tema');
    if (boton) boton.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
}

aplicarTema(temaGuardado ? temaGuardado === 'dark' : sistema.matches);

document.addEventListener('DOMContentLoaded', () => {
    aplicarTema(document.documentElement.classList.contains('dark'));

    document.querySelector('#cambiar-tema').addEventListener('click', () => {
        const oscuro = !document.documentElement.classList.contains('dark');
        temaGuardado = oscuro ? 'dark' : 'light';
        aplicarTema(oscuro);

        try {
            localStorage.setItem('rueda-libre-tema', temaGuardado);
        } catch {}
    });
});

sistema.addEventListener('change', (evento) => {
    if (!temaGuardado) aplicarTema(evento.matches);
});
