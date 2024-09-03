const textarea = document.getElementById('miTextarea');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function() {
    const cantidadCaracteres = textarea.value.length;
    contador.textContent = cantidadCaracteres;
});
