// Ejemplo de menú responsive
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Icono de menú

    document.querySelector('nav').insertBefore(menuToggle, document.querySelector('.nav-links'));

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
