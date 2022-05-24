
document.getElementById("nuevo-juego").addEventListener("click", crearPalabraSecreta);



var numeroRandom;
var palabra;
array1 = new Array();
array2 = new Array();
var letra;
var letraPresionada;
var coincidencia;
var repetida = new Array();
var aciertos = 0;
var oportunidad = 6;
var x = document.createElement("SPAN");
var t;
var letraRepetida = 0;

//Funcion que da una palabra al azar
function crearPalabraSecreta() {
    numeroRandom = Math.floor(Math.random() * (listaPalabras.length));
    palabra = listaPalabras[numeroRandom];
    console.log(palabra);
    crearGuiones();
}

//Funcion que crea los guiones dependiendo de la longitud de la palabra
function crearGuiones() {
    x.innerHTML = "";
    for (var i = 0; i < palabra.length; i++) {
        t = document.createTextNode("___  ");
        x.appendChild(t);
        document.body.appendChild(x);
    }
}

//funcion que dibuja la letra si es correcta
function dibujarLetraCorrecta() {

}


const letras_teclado = document.querySelectorAll("#teclado button");
for (var i = 0; i < letras_teclado.length; i++) {
    letras_teclado[i].addEventListener("click", capturarLetras);
}

//Funcion que captura las letras ingresadas por el usuario
function capturarLetras(event) {
    letra = event.target.textContent;
    compararLetras();

}

//Funcion que compara la palabra secreta con lo que el usuario digitó
// function compararLetras(){
//    if(palabra.includes(letra) == true){
//        console.log("Sí incluye");
//        if(repetida.includes(letra) == true){
//             console.log("repetida");
//        }else{
//          aciertos++;
//        }
//        if(aciertos == palabra.length){
//         alert("Ganaste!");
//         window.location.reload();
//     }
//    }else{
//         console.log("No incluye");
//         if(repetida.includes(letra) == true){
//             console.log("Repetida");
//         }else{
//             oportunidad--;
//         }
//         if(oportunidad == 0){
//             alert("GAME OVER!!")
//             window.location.reload();
//         }      
//    }
//    repetida.push(letra);
//    letra = document.getElementById("palabra-secreta").value = "";
// }

function compararLetras() {
    if (palabra.includes(letra) == true) {
        for (var i = 0; i < palabra.length; i++) {
            if (palabra.includes(letra) == true) {
                if (palabra[i + 0] == letra && repetida.includes(letra) == false) {
                    aciertos++;
                }
            }
        }
    }else if (palabra.includes(letra) == false && repetida.includes(letra) == false) {
        oportunidad--;
        console.log("Oportunidad es " + oportunidad);
    }
    repetida.push(letra);
    if (aciertos == palabra.length) {
        alert("Ganaste!!");
        window.location.reload();
    }
    if (oportunidad == 0) {
        alert("Perdiste!!");
        window.location.reload();
    }
}

//Funcion que escribe la letra cada vez que aciertas una letra



