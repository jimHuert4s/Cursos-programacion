function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRtigueya = document.getElementById('ratigueya')

    if(inputHipodoge.checked){ alert('Elegiste a hipodoge')}
    else if(inputCapipepo.checked){alert('Elegiste a Capipepo')}    
    if(inputRtigueya.checked){alert('Elegiste a Ratigueya')}    
    else{ alert('Debes elegir una mascota')}
}

window.addEventListener('load', iniciarJuego)