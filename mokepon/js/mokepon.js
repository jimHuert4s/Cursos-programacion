let ataqueJugador   
let ataqueEnemigo


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

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
    let mascotaAleatoria = aleatorio(1,3)
    let spamMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1){spamMascotaEnemigo.innerHTML='Hipodoge' }
    else if (mascotaAleatoria == 2){spamMascotaEnemigo.innerHTML='Capipepo'}
    else {spamMascotaEnemigo.innerHTML='Ratigueya'}
}

function ataqueFuego(){
    ataqueJugador = ('FUEGO')
    ataqueAleaterioEnemigo()
    
}
function ataqueAgua(){
    ataqueJugador = ('AGUA')
    ataqueAleaterioEnemigo()
    
}
function ataqueTierra(){
    ataqueJugador = ('TIERRA')
    ataqueAleaterioEnemigo()
    
}
 
function ataqueAleaterioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
        if(ataqueAleatorio == 1) ataqueEnemigo = 'FUEGO'
        else if(ataqueAleatorio == 2) ataqueEnemigo = 'AGUA'
        else{ataqueEnemigo = 'TIERRA'}

    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🤝")
      } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE 😎")
        
      } else if (ataqueJugador == 'AGAU' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE 😎")
       
      } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE 😎")
        
      } else {
        crearMensaje("PERDISTE 😭")
        
      }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ' Tu mascota ataca ' + ataqueJugador + ' la Mascota Enemiga atoco ' + ataqueEnemigo + resultado
    sectionMensaje.appendChild(parrafo)

}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    
  }

 window.addEventListener('load', iniciarJuego)                                       