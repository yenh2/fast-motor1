var intervCarrusel = null;
var idxImagen = -1;

window.onload = function() {
    playCarrusel();
}

function next() {
    clearInterval(intervCarrusel);
    if (idxImagen == 3) {
        idxImagen = 0;
    } else {
        idxImagen = idxImagen + 1;
    }
    ('inicio', idxImagen);
    setImage();
    playCarrusel();
}
function setImage() {
    var carrusel = document.getElementById("carrusel");
    switch (idxImagen) {
        case 0:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/250.jpg'/>";
            break;
        case 1:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/pulsar.jpg'/>";
            break;
        case 2:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/KTM.jpg'/>";
            break;
        case 3:
            carrusel.innerHTML = "<img class='fade-in' src='images/carrusel/DUCATI.png'/>";
            break;
    }
}

function playCarrusel() {
    intervCarrusel = setInterval(next, 3000);
}

function prev() {
    clearInterval(intervCarrusel);
    idxImagen = idxImagen - 1;
    ('inicio', idxImagen);
    setImage();
    playCarrusel();
}