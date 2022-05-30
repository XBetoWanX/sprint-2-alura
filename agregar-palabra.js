
document.getElementById("guardar").addEventListener("click", saveWord);

/*
//Funcion que añade palabra a la lista
function agregarPalabra(){
    let campo = document.getElementById("demo");
    var nuevaPalabra = document.querySelector(".input-texto").value;
    if (nuevaPalabra.length >= 2){
        if(isUpper(nuevaPalabra) == true){
            listaPalabras.push(nuevaPalabra);
            console.log(listaPalabras);
            location.href = "index-jugar.html";
        }else{
            campo.innerHTML = ("La palabra debe contener solo letras mayúsculas");
        }
    }else{
        campo.innerHTML = ("La palabra debe tener minimo 2 letras");
    }
    //Reseteamos el input texto
    document.getElementById("reset-form").reset();
} */

//Funcion para verificar si la palabra es totalmente mayúscula
function isUpper(str){
    return /[A-Z]/.test(str);
}




//Funcion para agregar palabra al sessionStorage
// function saveWord(){
//     let campo = document.getElementById("demo");
//     var new_data = document.getElementById("nueva-palabra").value;

//     if(sessionStorage.getItem('data') == null){
//         sessionStorage.setItem('data', '["RATON", "FUENTE", "RELOJ", "CIRUELA"]');
//     }
//     old_data = JSON.parse(sessionStorage.getItem('data'));
    
//     if (new_data.length >= 2){
//         if (isUpper(new_data) == true){
//             old_data.push(new_data);
//             sessionStorage.setItem('data', JSON.stringify(old_data));
//             // listaDePalabras = window.old_data;
//             console.log(old_data);
//             location.href = "index-jugar.html";
//         }else{
//             campo.innerHTML = ("La palabra debe contener solo letras mayúsculas");
//         }
//     }else{
//         campo.innerHTML = ("La palabra debe tener minimo 2 letras");
//     }
// }
