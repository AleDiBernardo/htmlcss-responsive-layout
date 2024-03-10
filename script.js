const pulsante = document.querySelector('.button');
const barraLaterale = document.querySelector('.sidebar');

pulsante.addEventListener('click', function() {
    barraLaterale.classList.toggle('show'); // Aggiunge o rimuove la classe 'show'
});
