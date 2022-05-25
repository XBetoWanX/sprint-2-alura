var listaPalabras = ["RATON", "FUENTE", "RELOJ", "CIRUELA", "POPOCATEPETL", "PROCESADOR"];

document.getElementById("nuevo-juego").addEventListener("click", crearPalabraSecreta);


var numeroRandom;
var palabra;
array1 = new Array();
array2 = new Array();
var letra;
var repetida = new Array();
var aciertos;
var oportunidad;
var letraRepetida = 0;
var desactivarLetra;

//Funcion que da una palabra al azar
function crearPalabraSecreta() {
    aciertos = 0;
    oportunidad = 6;
    numeroRandom = Math.floor(Math.random() * (listaPalabras.length));
    palabra = listaPalabras[numeroRandom];
    console.log(palabra);
    crearGuiones();
}

//Funcion que crea los guiones dependiendo de la longitud de la palabra
function crearGuiones() {
    const palabraAdivinar = document.getElementById("palabra-a-adivinar");
    palabraAdivinar.innerHTML = "";
    for (var i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        palabraAdivinar.appendChild(span);
    }
}

const letras_teclado = document.querySelectorAll("#teclado button");
for (var i = 0; i < letras_teclado.length; i++) {
    letras_teclado[i].addEventListener("click", capturarLetras);

}

//Funcion que captura las letras ingresadas por el usuario
function capturarLetras(event) {
    desactivarLetra = event.target;
    letra = event.target.textContent;
    desactivarLetra.disabled = true;
    compararLetras();
}

//Funcion que compara la palabra secreta con lo que el usuario digitó y dibuja la letra correcta
function compararLetras() {
    const spans = document.querySelectorAll("#palabra-a-adivinar span")
    if (palabra.includes(letra) == true) {
        for (var i = 0; i < palabra.length; i++) {
            if (palabra.includes(letra) == true) {
                if (palabra[i + 0] == letra && repetida.includes(letra) == false) {
                    aciertos++;
                    spans[i].innerHTML = letra;
                }
            }
        }
    }else if (palabra.includes(letra) == false && repetida.includes(letra) == false) {
        oportunidad--;
        console.log("Oportunidad es " + oportunidad);
    }
    repetida.push(letra);
    if (aciertos == palabra.length) {
        setTimeout(ganaste, 500);

    }
    if (oportunidad == 0) {
        alert("Perdiste!!, la palabra era: " + palabra);
        window.location.reload();
    }
}

//Funcion que te dice si ganaste
function ganaste(){
    alert("GANASTE!!")
    window.location.reload();
}




