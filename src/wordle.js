import FuncionesWordle from "./funcionesWordle";

class Wordle{
    constructor(){
        this.palabraSecreta;
        this.tamPalabraSecreta;
        this.intento;
        this.historialIntentos = [];
        this.nroIntentos;
        this.funcionesWordle = new FuncionesWordle();
        this.cadenaResultado;
    }

    definirPalabraSecreta(){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecretaAlAzar();
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirSecreta(palabra){
        this.palabraSecreta = this.funcionesWordle.definirPalabraSecreta(palabra);
        this.definirTamPalabraSecreta();
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }

    definirTamPalabraSecreta(){
        this.tamPalabraSecreta = this.funcionesWordle.definirTamanioPalabraSecreta(this.palabraSecreta);
    }

    definirIntento(intentoPalabra){
        this.intento = this.funcionesWordle.definirIntento(intentoPalabra, this.tamPalabraSecreta);
        this.historialIntentos = this.funcionesWordle.definirHistorialIntentos();
        this.nroIntentos = this.funcionesWordle.definirNroIntentos();
    }


    obtenerIntento(){
        return this.intento;
    }

    obtenerHistorialIntentos(){
        return this.historialIntentos;
    }

    obtenerNroIntentos(){
        return this.nroIntentos;
    }
    
    obtenerPalabraSecreta(){
        return this.palabraSecreta;
    }

    obtenerPalabrasSeleccionables(){
        return this.funcionesWordle.obtenerListaPalabras();
    }
    
    obtenerCadenaResultado(){
        this.funcionesWordle.definirCadenaResultado(this.palabraSecreta,this.intento);
        return this.funcionesWordle.obtenerCadenaResultado();
    }
}
export default Wordle;