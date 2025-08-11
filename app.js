// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let nombre = amigo.value.trim(); // guardar antes de limpiar

    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        lista.push(nombre);
        amigo.value = ""; 
        amigo.focus();
        actualizarLista(nombre)   
    }
}

function actualizarLista(nombre){

        let listaAmigos = document.getElementById('listaAmigos');
    
        let li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
   }
    
function sortearAmigo(){

    if (lista.length == 0) {
        alert('Tu lista de amigos esta vacia');
        return;
    } else {
     let resultado = document.getElementById('resultado');

        let amigoSorteado = lista[Math.floor(Math.random() * lista.length)];
        resultado.innerHTML = `El amigo elegido es: ${amigoSorteado}`;

        }
}