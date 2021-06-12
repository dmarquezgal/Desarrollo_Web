const enlaces = document.querySelectorAll('#navbarSupportedContent a');
enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        enlaces.forEach((enlace) => enlace.classList.remove('active'));
        evento.target.classList.add('active');
    });
});
