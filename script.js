const textArea= document.querySelector(".text-area");
const mensaje=  document.querySelector(".MensajeEncriptado"); 
const texto= document.querySelector(".textos");
const botonCopiar = document.querySelector(".Copiar");
const BotonEncriptar = document.querySelector(".BotonEncriptar");


function encriptar(stringEncriptado){
    let matrizCodigo=[["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado= stringEncriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


BotonEncriptar.addEventListener("click", function() {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        texto.style.display = "none";
        botonCopiar.style.display = "block";
        botonCopiar.addEventListener("click", Copiar);
    });

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado= stringDesencriptado.toLowerCase()

    for(let i=0;  i <matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}

function BotonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value= textoEncriptado;
    textArea.value= "";
    mensaje.style.backgroundImage = "none"
    texto.style.display="none"
    botonCopiar.style.display = "block";
    botonCopiar.addEventListener("click", Copiar);
}


function Copiar() {
    mensaje.select();
    document.execCommand("copy");    
}
