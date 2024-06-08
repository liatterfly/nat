// Función para activar el modo oscuro
function activarModoOscuro() {
    console.log("Modo oscuro activado");
    // Cambiar el fondo del body y el color del texto

    // Cambiar estilos de otros elementos si es necesario
    // Por ejemplo, cambiar el fondo de la barra de navegación
    document.querySelector('.header').style.backgroundColor = '#D1C3B8';
    document.querySelector('.pageone__content').style.backgroundColor = '#D1C3B8';
    document.querySelector('.about__me').style.backgroundColor = '#D1C3B8';
    document.querySelector('.title__portafolio').style.backgroundColor = '#D1C3B8';
    document.querySelector('.page__three').style.backgroundColor = '#EA8ABC';
    document.querySelector('.page__four').style.backgroundColor = '#EA8ABC';
    document.querySelector('.page__five').style.backgroundColor = '#EA8ABC';
    document.querySelector('.page__six').style.backgroundColor = '#EA8ABC';
    document.querySelector('.posters').style.backgroundColor = '#9FBD75';
    document.querySelector('.posters__2').style.backgroundColor = '#9FBD75';
    document.querySelector('.contact__me').style.backgroundColor = '#D1C3B8';
   
    // Cambiar el color de los enlaces
    var enlaces = document.querySelectorAll('.title__book');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.nav__link');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#725c4b';
    }
    var enlaces = document.querySelectorAll('.title__editorial');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.paragraph__book');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.title__periodico');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.paragraph__periodico');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.title__revista');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.paragraph__revista');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.title__brillante');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }
    var enlaces = document.querySelectorAll('.paragraph__brillante');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#F9EDE2';
    }

    // Cambiar el icono de la luna
    document.getElementById('icon').src = '/Recursos/sun.png';
}

// Función para desactivar el modo oscuro
function desactivarModoOscuro() {
    console.log("Modo oscuro desactivado");

    // Cambiar estilos de otros elementos si es necesario
    // Por ejemplo, cambiar el fondo de la barra de navegación de vuelta a su color original
    document.querySelector('.header').style.backgroundColor = '#F9EDE2';
    document.querySelector('.pageone__content').style.backgroundColor = '#F9EDE2';
    document.querySelector('.title__portafolio').style.backgroundColor = '#F9EDE2';
    document.querySelector('.about__me').style.backgroundColor = '#FCEEF5';
    document.querySelector('.page__three').style.backgroundColor = '#FCEEF5';
    document.querySelector('.page__four').style.backgroundColor = '#FCEEF5';
    document.querySelector('.page__five').style.backgroundColor = '#FCEEF5';
    document.querySelector('.page__six').style.backgroundColor = '#FCEEF5';
    document.querySelector('.posters').style.backgroundColor = '#DBE6CB';
    document.querySelector('.posters__2').style.backgroundColor = '#DBE6CB';
    document.querySelector('.contact__me').style.backgroundColor = '#F9EDE2';

    // Cambiar el color de los enlaces de vuelta a su color original
    var enlaces = document.querySelectorAll('.title__book');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.nav__link');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.title__editorial');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.paragraph__book');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.title__periodico');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.paragraph__periodico');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.title__revista');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.paragraph__revista');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.title__brillante');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }
    var enlaces = document.querySelectorAll('.paragraph__brillante');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].style.color = '#4D3E32';
    }

    // Cambiar el icono de la luna de vuelta a su icono original
    document.getElementById('icon').src = '/Recursos/moon.png';
}

// Evento click en el icono de la luna para alternar entre modo oscuro y modo claro
document.getElementById('icon').addEventListener('click', function() {
    // Verificar si el modo oscuro está activado
    var modoOscuroActivo = document.body.classList.contains('dark-mode');

    // Si está activado, desactivarlo; de lo contrario, activarlo
    if (modoOscuroActivo) {
        desactivarModoOscuro();
        // Remover la clase dark-mode del body
        document.body.classList.remove('dark-mode');
    } else {
        activarModoOscuro();
        // Agregar la clase dark-mode al body
        document.body.classList.add('dark-mode');
    }
});

