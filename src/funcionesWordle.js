import WordleError from "./ExcepcionesWordle";

class FuncionesWordle{
    constructor(){
        this.palabrasSeleccionables = ["HOJA", "HOLA", "LOBO", "COLA", "PALO", "PICO", "COCA", "PERO", "DUKE", "RAYOS", "MESSI", "PALOS", "LIBRO", "LLAVE", "BALON", "CINCO"];
        this.tamPalabrasSeleccionables = this.palabrasSeleccionables.length;
        this.listaIntentos = ["X", "X", "X", "X", "X", "X"];
        this.listaPistas = ["X", "X", "X", "X", "X", "X"];
        this.nroIntentos;
        this.cadenaResultado;
        this.copiaPalabraSecreta = [""];
    }

    generarResultadoVacio(tamPalabraSecreta){
        this.cadenaResultado = [];
        for(var i = 0; i < tamPalabraSecreta; i++){
            this.cadenaResultado.push("o");
        }
    }

    definirNuevaPalabra(nuevaPalabra){
        if(this.palabrasSeleccionables.includes(nuevaPalabra)){
            throw new WordleError("Ya existe esa palabra.");
        }else{
            this.palabrasSeleccionables.push(nuevaPalabra);
            this.tamPalabrasSeleccionables++;
        }
    }

    agregarNuevaPalabra(nuevaPalabra){
        let palabra = nuevaPalabra;
        try {
            this.definirNuevaPalabra(nuevaPalabra);
        } catch (error) {
            palabra = error.message;
        }
        return palabra;
    }
    
    definirPalabraSecretaAlAzar(){
        this.limpiarListaIntentos();
        let posicion = Math.floor(Math.random() * this.tamPalabrasSeleccionables);
        return this.palabrasSeleccionables[posicion]
    }
    
    definirPalabraSecreta(palabra){
        this.limpiarListaIntentos();
        if(!this.palabrasSeleccionables.includes(palabra)){
            this.palabrasSeleccionables.push(palabra);
            this.tamPalabrasSeleccionables++;
        }
        return palabra;
    }

    limpiarListaIntentos(){
        this.listaIntentos = ["X", "X", "X", "X", "X", "X"];
        this.listaPistas= ["X", "X", "X", "X", "X", "X"];
        this.nroIntentos = 0;
    }

    obtenerListaPalabras(){
        return this.palabrasSeleccionables;
    }

    definirTamanioPalabraSecreta(palabraSecreta){
        return palabraSecreta.length;
    }

    esIntentoIncompleto(intento, tamPalabraSecreta){
        if(intento.length < tamPalabraSecreta){
            throw new WordleError("Palabra Incompleta.");
        }
    }

    esIntentoPermitido(intento){
        if(!this.palabrasSeleccionables.includes(intento)){
            throw new WordleError("No existe esa palabra.");
        }
    }

    agregarIntentoHistorial(intento){
        this.listaIntentos[this.nroIntentos] = intento;
        this.nroIntentos++;
    }

    definirIntento(intento, tamPalabraSecreta){
        try{
            if(this.nroIntentos < 6){
                this.generarResultadoVacio(tamPalabraSecreta);
                this.esIntentoIncompleto(intento, tamPalabraSecreta);
                this.esIntentoPermitido(intento);
                this.agregarIntentoHistorial(intento);
            }
        }
        catch(err){
            intento = err.message;
        }
        return intento;
    }


    definirHistorialIntentos(){
        return this.listaIntentos;
    }

    definirNroIntentos(){
        return this.nroIntentos;
    }

    definirListaPistas(){
        return this.listaPistas;
    }

    definirAzules(palabraSecreta, intento){
        for(let i = 0; i < palabraSecreta.length; i++){
            if(intento[i] == palabraSecreta[i]){
                this.cadenaResultado[i] = "z";
                this.copiaPalabraSecreta[i] = ".";
            }
        }
    }

    definirAmarillas(palabraSecreta, intento){
        let pos;
        for(let i = 0; i < palabraSecreta.length; i++){
            pos = this.copiaPalabraSecreta.indexOf(intento[i]);
            if(this.cadenaResultado[i] != "z" && pos != -1){
                this.cadenaResultado[i] = "a";
                this.copiaPalabraSecreta[pos] = ".";
            }
        }
    }

    concatenarResultado(){
        this.cadenaResultado = this.cadenaResultado.join("");
    }

    agregarPista(){
        this.listaPistas[this.nroIntentos-1] = this.cadenaResultado;
    }
    
    definirCadenaResultado(palabraSecreta, intento){
        if(this.listaPistas[5].length == 1){
            this.copiaPalabraSecreta = palabraSecreta.split("");
            this.definirAzules(palabraSecreta, intento);
            this.definirAmarillas(palabraSecreta,intento);
            this.concatenarResultado();
            this.agregarPista();
        }
    }
    
    obtenerCadenaResultado(){
        return this.cadenaResultado;
    }

    definirResultadoJuego(intento, palabraSecreta){
        let resultado = "Activo";
        if(intento == palabraSecreta){
            resultado = "Ganador";
        }
        else if (this.nroIntentos == 6)
        {
            resultado = "Perdedor";
        }
        return resultado;
    }
}

export default FuncionesWordle;