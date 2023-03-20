document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
    evento.preventDefault()
    let numeroMaximo = parseInt(document.getElementById('numero-maximo').value)
    
    let numeroAleatorio = Math.random() * numeroMaximo
    numeroAleatorio = Math.round(numeroAleatorio)

    if(numeroAleatorio === 0 ) {
      numeroAleatorio++
    }

    document.getElementById('resultado-valor').innerText = numeroAleatorio
    document.querySelector('.resultado').style.display = 'block'
    
  })
})