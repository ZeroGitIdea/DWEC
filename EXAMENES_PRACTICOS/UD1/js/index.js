// Variables
// Declaramos las variables ventanaSecundaria que sera la que saldrá emergente cuando calculemos las palabras
let ventanaSecundaria = null;
// Y contador que este se irá incrementando hasta 10 y despues se cerrará la ventana
let contador = 0;

// Esta es la primera función y será la que calculará la frase introducida y la validará
function comenzar() {
    // Prompt para pedir las palabras por pantalla
    let frase = prompt("Introduce una frase o palabras (puede contener minúsculas o mayúsculas sin acentuar o espacios en blanco)");

    // Este bucle se repetirá mientras que las condiciones de dentro se cumplan
    while (true) {
        if (frase === null || frase === "") {
            console.log("Fin.");
            return;
        }

        let comprobador = true;
        for (let i = 0; i < frase.length; i++) {
            let codigo = frase.charCodeAt(i);
            // Condicional para comprar que los caracteres añadidos son letras, es decir, entran dentro del rango
            // del código ASCII
            if (!((codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 90) || (codigo === 32))) {
                comprobador = false;
                break;
            }
        }

        // Si se ha validado que lo introducido es correcto, se abre la ventana
        if (comprobador === true) {
            abrirVentana(frase);
            break;
        } else {
            alert("Caracteres no admitidos");
        }
    }
}

function abrirVentana(frase) {
    const ancho = Math.floor(Math.random() * 100) + 400;
    const alto = Math.floor(Math.random() * 100) + 400;

    // Corregido: Utiliza `` para la plantilla de cadenas
    ventanaSecundaria = window.open("", "", `width=${ancho},height=${alto}`);

    let numPalabras = 1; // Teniendo en cuenta que debe comenzar con una palabra, lo iniciamos en uno
    let resultado = "Palabras: <br><br>";

    // Contador de palabras
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === " ") {
            numPalabras++;
            resultado += "<br>";
        } else {
            resultado += frase.charAt(i);
        }
    }

    // Corregido: Utiliza `` para la plantilla de cadenas
    resultado += `<br><br>Número de palabras: ${numPalabras}<br>`;

    // Corregido: Utiliza `` para la plantilla de cadenas y cierra correctamente las etiquetas
    ventanaSecundaria.document.body.innerHTML = `<p>${resultado}</p><p id="contador">Contador: ${contador}</p><button onclick="window.close()">Detener</button>`;

    let intervalo = setInterval(() => {
        contador++;
        if (ventanaSecundaria && !ventanaSecundaria.closed) {
            // Corregido: Utiliza `` para la plantilla de cadenas
            ventanaSecundaria.document.getElementById("contador").innerText = `Contador: ${contador}`;
        }
    }, 1000); // Milisegundos es decir un segundo, establece cada vez que se ejecuta el intervalo

    setTimeout(() => {
        if (ventanaSecundaria && !ventanaSecundaria.closed) {
            ventanaSecundaria.close();
            clearInterval(intervalo);
            contador = 0;
        }
    }, 10000);
}
