function reset(){
  document.getElementById("hambre").textContent = '6';
  document.getElementById("salud").textContent =  '0';
  document.getElementById("felicidad").textContent =  '6';
  
  // Array de opciones
    const opciones = ['susi', 'coral','cuthulu','zeus','kraken','senor esponjoso'];
  // Generar un índice aleatorio
  const indice = Math.floor(Math.random() * opciones.length);
  // Seleccionar una opción del grupo al azar
  document.getElementById("name").textContent =  opciones[indice];


  const generos = ['macho','hembra'];
  const indice2 = Math.floor(Math.random() * generos.length);
  document.getElementById("gender").textContent =  generos[indice2];
  // ejecutara turno cada 10 segundos
  setInterval(turno, 2000);
}


function alimentar() {
  x = document.getElementById("hambre").textContent;
  y = parseInt(x) + 2
  document.getElementById("hambre").textContent = Math.min( y,10)
  document.getElementById("salud").textContent = Math.max(y-10 ,0)+parseInt(document.getElementById("salud").textContent)
}

function jugar() {
  x = document.getElementById("felicidad").textContent;
  document.getElementById("felicidad").textContent = Math.min( parseInt(x)+2,10)
  }


function turno() {
  document.getElementById("felicidad").textContent = parseInt(document.getElementById("felicidad").textContent) - 1;
  document.getElementById("hambre").textContent = parseInt(document.getElementById("hambre").textContent) - 1;
}



