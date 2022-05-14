import definirPalabrasSeleccionables from "./wordle"


//VISTAS

const vistaModalidades = document.querySelector("#vista-modalidades");
const vistaCampoJuego = document.querySelector("#vista-campo-juego");


//FORMULARIOS
const formJuegoRapido = document.querySelector("#juego-rapido-form");


//EVENTOS
formJuegoRapido.addEventListener("submit", (event) => {
  event.preventDefault();

  let palabraSeleccionable = definirPalabrasSeleccionables();
  alert(palabraSeleccionable);
  vistaModalidades.style.display = "none";
  vistaCampoJuego.style.display = "block";

});
