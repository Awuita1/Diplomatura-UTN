/*
Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion
*/

const distancia = prompt('Ingresa la distancia a recorrer');

if (distancia >= 0 && distancia < 1000) {
    document.write('ERROR debes ingresar una distancia real (presiona F5)');
} else if (distancia >= 1000 && distancia < 10000) {
    document.write('Debes ir en bicicleta');
} else if (distancia >= 10000 && distancia < 30000) {
    document.write('Debes ir en colectivo');
} else if (distancia >= 30000 && distancia < 100000) {
    document.write('Debes ir en auto');
} else if (distancia >= 100000) {
    document.write('Debes ir en avion');
} else {
    document.write('Distancia no válida');
}