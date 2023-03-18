function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRtigueya = document.getElementById('ratigueya')
    let spamMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){spamMascotaJugador.innerHTML='Hipodoge'}
    else if(inputCapipepo.checked){spamMascotaJugador.innerHTML='Capopepo'}    
    else if(inputRtigueya.checked){spamMascotaJugador.innerHTML='Ratigueya'}    
    else{ alert('Debes elegir una mascota')}

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spamMascotaEnemigo = document.getElementById('mascota-enemigo')

        if (ataqueAleatorio == 1){spamMascotaEnemigo.innerHTML='Hipodoge' }
        else if (ataqueAleatorio == 2){spamMascotaEnemigo.innerHTML='Capipepo'}
        else {spamMascotaEnemigo.innerHTML='Ratigueya'}


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

window.addEventListener('load', iniciarJuego)                                       