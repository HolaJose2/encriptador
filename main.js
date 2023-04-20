let texto = document.getElementById('texto');
let encriptar = document.getElementById('encriptar');
let desencriptar = document.getElementById('desencriptar');
let mensaje = document.getElementById('desencriptado');
let resultado = document.getElementById('resultado')



encriptar.addEventListener('click',encriptarFrase);
desencriptar.addEventListener('click',desencriptarFrase);

const llaves = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat",
}



function encriptarFrase(event){
    let frase = texto.value
    frase = frase.toLowerCase()
    console.log(frase)
    event.preventDefault();
    if (frase.length == 0 || /^\s+$/.test(frase)){

        document.querySelector('.desencriptado').style.display = "flex"
        document.getElementById('contenido').style.display = "none"
        document.getElementById('error').style.display = "block"
    }
    else{
        frase = frase.split("")
        for(let i = 0; i < frase.length ; i++){
            for( let j in llaves){
                if (frase[i] == j){
                    frase[i] = llaves[j]
                }
            }
        }
        frase = frase.join("")
        document.querySelector('.desencriptado').style.display = "block"
        document.getElementById('contenido').style.display = "block"
        document.getElementById('error').style.display = "none"
        document.getElementById('copiar').style.display = "block"
        document.getElementById('resultado').style.display = "block"

        resultado.innerHTML = frase
        texto.value = ""

    }
}


function desencriptarFrase(event){
    let frase = texto.value
    frase = frase.toLowerCase()
    event.preventDefault();
    if (frase.length == 0 || /^\s+$/.test(frase)){
        document.querySelector('.desencriptado').style.display = "flex"
        document.getElementById('contenido').style.display = "none"
        document.getElementById('error').style.display = "block"    
    }
    else{
        frase = frase.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

        document.querySelector('.desencriptado').style.display = "block"
        document.getElementById('contenido').style.display = "block"
        document.getElementById('error').style.display = "none"
        document.getElementById('copiar').style.display = "block"
        document.getElementById('resultado').style.display = "block"

        resultado.innerHTML = frase

        texto.value = ""
    }

}



let btn_copiar = document.getElementById('copiar')

//funcion, copiar texto
btn_copiar.addEventListener('click', async () => {
    // Obtén el contenido que deseas copiar
    const contenido = document.getElementById('resultado').innerHTML;
  
    try {
      // Copia el contenido al portapapeles utilizando la Clipboard API
      await navigator.clipboard.writeText(contenido);
      // Muestra un mensaje de éxito
      alert("Se copió el contenido!")
    } catch (error) {
      // Maneja errores de copiado al portapapeles
      console.error('Error al copiar al portapapeles:', error);
    }
  });

