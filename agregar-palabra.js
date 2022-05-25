

// document.getElementById("guardar").addEventListener("click", agregarPalabra);

//Funcion que añade palabra a la lista
function agregarPalabra(){
    let campo = document.getElementById("demo");
    var nuevaPalabra = document.querySelector(".input-texto").value;
    if (nuevaPalabra.length != 0){
        if(isUpper(nuevaPalabra) == true){
            listaPalabras.push(nuevaPalabra);
            console.log(listaPalabras);
            location.href = "index-jugar.html";
        }else{
            campo.innerHTML = ("La palabra debe contener solo letras mayúsculas");
        }
    }else{
        campo.innerHTML = ("El campo no puede estar vacío");
    }
    //Reseteamos el input texto
    document.getElementById("reset-form").reset();
}

//Funcion para verificar si la palabra es totalmente mayúscula
function isUpper(str){
    return /[A-Z]/.test(str);
}
