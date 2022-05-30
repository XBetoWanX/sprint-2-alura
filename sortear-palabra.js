var listaPalabras = ["RATON", "FUENTE", "RELOJ", "CIRUELA", "POPOCATEPETL", "PROCESADOR", "CORONAVIRUS"
, "PANDEMIA", "VACUNAS", "COMPUTADORA", "GABINETE", "MICROFONO", "COVID"];

var btn = document.getElementById("obtener-palabra");
btn.addEventListener("click", crearPalabraSecreta);

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
    btn.disabled = true;
    
}

//Funcion que crea los guiones dependiendo de la longitud de la palabra
function crearGuiones() {
    const palabraAdivinar = document.getElementById("palabra-a-adivinar");
    palabraAdivinar.innerHTML = "";
    for (var i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        palabraAdivinar.appendChild(span);
        
    }
    dibujarAhorcado();
}

const letras_teclado = document.querySelectorAll("#teclado button");
for (var i = 0; i < letras_teclado.length; i++) {
    letras_teclado[i].addEventListener("click", capturarLetras);

}

//Funcion que captura las letras ingresadas por el usuario
function capturarLetras(event) {
    desactivarLetra = event.target;
    letra = event.target.textContent;
    if(palabra.length != 0){
        desactivarLetra.disabled = true;
    }
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
        dibujarAhorcado();
        console.log("Oportunidad es " + oportunidad);
    }
    repetida.push(letra);
    if (aciertos == palabra.length) {
        setTimeout(ganaste, 500);

    }
    if (oportunidad == 0) {
        setTimeout(perdiste, 500);
    }
}

//Funcion que te dice si ganaste
function ganaste(){
    alert("GANASTE!!")
    window.location.reload();
}

function perdiste(){
    alert("Perdiste!!, la palabra era: " + palabra);
    window.location.reload();
}

const img = document.getElementById("ahorcado-imagen");
let ahorcado = document.createElement("IMG");

//Función que dibuja el ahorcado
function dibujarAhorcado(){
    switch ( oportunidad ){
        case 6: ahorcado.setAttribute("src", "imagenes/ahorcado(1).png");
        img.appendChild(ahorcado);
        break;
        case 5: ahorcado.setAttribute("src", "imagenes/ahorcado(2).png");
        img.appendChild(ahorcado);
        break;
        case 4: ahorcado.setAttribute("src", "imagenes/ahorcado(3).png");
        img.appendChild(ahorcado);
        break;
        case 3: ahorcado.setAttribute("src", "imagenes/ahorcado(4).png");
        img.appendChild(ahorcado);
        break;
        case 2: ahorcado.setAttribute("src", "imagenes/ahorcado(5).png");
        img.appendChild(ahorcado);
        break;
        case 1: ahorcado.setAttribute("src", "imagenes/ahorcado(6).png");
        img.appendChild(ahorcado);
        break;
        case 0: ahorcado.setAttribute("src", "imagenes/ahorcado(7).png");
        img.appendChild(ahorcado);
        
    }
 }


