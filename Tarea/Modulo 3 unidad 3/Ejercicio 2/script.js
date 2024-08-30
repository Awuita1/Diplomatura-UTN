/*
Crear el código que reciba como parámetro un array de números y devuelva el mayor.
*/

let array = new Array(10) //10 de espacio

//El array vacio recibe valores aleatorios entre 0<X<10
for(let i = 0; i < array.length; i++){
    array[i] = parseInt(Math.random() * 10);
}

//Escribo el resultado
console.log(array)

//Algoritmo que encuentra el mayor elemento del array y lo imprime en la consola
let biggest = array[0];
for(let i = 0; i < array.length; i++){
    //Si el mayor elemento actual se encuentra con un valor mayor, 
    if(biggest < array[i]) biggest = array[i];
}

console.log(biggest);