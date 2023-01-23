const btnSaludar = document.getElementById('saludar')
const contenedor = document.getElementById('contenedor')
const texto = document.getElementById('texto')
const parrafo = document.createElement('p')
parrafo.style.color='white'
const errorMensaje = document.createElement('p')

const formulario = document.createElement('form')

const inpNombre = document.createElement('input')
inpNombre.type = "text";
inpNombre.id = 'inpnombre'
inpNombre.placeholder = 'Escribe tu nombre'
inpNombre.autocomplete = 'off'


const emojis = ['🍧', '😀', '😋', '😪']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btnSaludar.addEventListener('click', () => {
    btnSaludar.remove()
    texto.replaceWith(formulario)
    formulario.appendChild(inpNombre)
    contenedor.style.backgroundColor = '#fffa'

    formulario.addEventListener('submit', ()=>{
        parrafo.textContent='Hola '+inpNombre.value+'! '+emojis[getRandomInt(4)]
        errorMensaje.textContent="ERROR ❗❓"

        function error() {
            contenedor.replaceChild(texto, errorMensaje);
        }
    
        if ( inpNombre.length < 1 ){
            contenedor.replaceChild(errorMensaje, texto);
            setTimeout(error, 1000);
        } else {
            contenedor.replaceChild(parrafo, formulario);
            btnSaludar.remove()
            contenedor.style.backgroundColor = '#000'
        }
    })

})



  
  