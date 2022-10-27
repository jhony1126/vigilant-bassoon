const areaTexto =document.getElementById('area-Texto');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnEncriptar = document.getElementById('btn-encriptar');
const inputResultado = document.getElementById('resultado');
const btnCopiar = document.getElementById('btn-copiar');
const soloLetras = '^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptar);
    btnDesencriptar.addEventListener('click', desencriptar);
    btnCopiar.addEventListener('click', copiar);
  });

function encriptar(x){
    x.preventDefault();
    inputResultado.value='';
    let texto=areaTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split('' );
        let nuevasPalabras = [];
        
        for (let palabra of palabras) {
          palabra = palabra.replaceAll('e','enter');
          palabra = palabra.replaceAll('i','imes');
          palabra = palabra.replaceAll('a','ai');
          palabra = palabra.replaceAll('o','ober');
          palabra = palabra.replaceAll('u','ufat');      
          
          nuevasPalabras.push(palabra); }  

          const resultado =nuevasPalabras.join('')
          inputResultado.value = resultado;
        }
        else {
            mostrarError('no se permiten,mayusculas ni acentos');
            return;
          }  
}
function desencriptar(x){
    x.preventDefault();
    inputResultado.value='';
    let texto=areaTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(' ');
        let nuevasPalabras = [];
        
        for (let palabra of palabras) {
          palabra = palabra.replaceAll('emter','e');
          palabra = palabra.replaceAll('imes','i');
          palabra = palabra.replaceAll('ai','a');
          palabra = palabra.replaceAll('ober','o');
          palabra = palabra.replaceAll('ufat','u');      
          
          nuevasPalabras.push(palabra); }  

          const resultado =nuevasPalabras.join('')
          inputResultado.value = resultado;
        }
        else {
            mostrarError('no se permiten,mayusculas ni acentos');
            return;
          }  
}
function mostrarError(mensaje) {
    const existeError = document.querySelector('.error');
if(!existeError) {
    const formulario = document.getElementById('parrafo');
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    divMensaje.textContent = mensaje;            
    formulario.appendChild(divMensaje);
    
    setTimeout(()=> {
        divMensaje.remove();
    }, 500);
}
}
function copiarTexto(x) {
    x.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}

