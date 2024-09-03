/*
0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion
*/

function distancias(distancia){ 
    if (distancia >= 0 && distancia < 1000) {
        document.write("Debes ir a pie");
    } else if (distancia >= 1000 && distancia < 10000) {
        document.write("Debes ir en bicicleta")
    } else if (distancia >= 10000 && distancia < 30000) {
        alert("Debes ir en colectivo");
    } else if (distancia >= 30000 && distancia < 100000) {
        alert("Debes ir en auto");
    } else if (distancia >= 100000) {
        alert("Debes ir en avión");
    } else {
        alert("Distancia no válida");
    }
}