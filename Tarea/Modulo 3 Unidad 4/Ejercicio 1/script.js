const cuerpo = document.body;
const rojo = document.getElementById('rojo');
const azul = document.getElementById('azul');
const verde = document.getElementById('verde');

rojo.addEventListener('click', function(){ 
    cuerpo.className = 'button-red';
});

azul.addEventListener('click', function(){ 
    cuerpo.className = 'button-blue';
});

verde.addEventListener('click', function(){ 
    cuerpo.className = 'button-green';
});
