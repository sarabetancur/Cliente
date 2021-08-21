let boton=document.getElementById("boton1");

let titulo1=document.getElementById("titulo1");
let imagen1=document.getElementById("imagen1");
let audio1=document.getElementById("audio1");

let titulo2=document.getElementById("titulo2");
let imagen2=document.getElementById("imagen2");
let audio2=document.getElementById("audio2");

let titulo3=document.getElementById("titulo3");
let imagen3=document.getElementById("imagen3");
let audio3=document.getElementById("audio3");

 boton.addEventListener("click",cambiar);

function cambiar(){
    imagen1.src="img/queen2.jpg";
    audio1.src="audio/AnotherOne.mp3";
    titulo1.textContent="ALBUM 1974";

    imagen2.src="img/queen3.jpg";
    audio2.src="audio/CrazyLittle.mp3";
    titulo2.textContent="ALBUM 1981";

    imagen3.src="img/queen6.jpg";
    audio3.src="audio/AnotherOne.mp3";
    titulo3.textContent="ALBUM 1975";
 

} 

