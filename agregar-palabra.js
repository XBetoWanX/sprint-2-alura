var listaPalabras = ["RATON", "FUENTE", "RELOJ", "CIRUELA"];

// document.getElementById("guardar").addEventListener("click", agregarPalabra);

//Funcion que añade palabra a la lista
function agregarPalabra(){
    var nuevaPalabra = document.querySelector(".input-texto").value;
    if (nuevaPalabra.length != 0){
        listaPalabras.push(nuevaPalabra);
        console.log(listaPalabras);
        location.href = "index-jugar.html";
    }
    //Reseteamos el input texto
    document.getElementById("reset-form").reset();
}


