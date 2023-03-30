export class Direccion{
    private calle:string;
    private numero:number;
    private piso:number;
    private letra:string;
    private codigoPostal:number;
    private poblacion:string;
    private provincia:string;
    constructor(  
        calle:string,
        numero:number,
        piso:number,
        letra:string,
        codigoPostal:number,
        poblacion:string,
        provincia:string
    ){
           this.calle=calle;
           this.numero=numero;
           this.piso=piso;
           this.letra=letra;
           this.codigoPostal=codigoPostal;
           this.poblacion=poblacion;
           this.provincia=provincia;
    }

    getCalle(){
        return this.calle;
    }

    setCalle(calle:string){
        this.calle=calle;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero:number){
        this.numero=numero;
    }

    getPiso(){
        return this.piso;
    }

    setPiso(piso:number){
        this.piso=piso;
    }

    getLetra(){
        return this.letra;
    }

    setLetra(letra:string){
        this.letra=letra;
    }

    getCodigoPostal(){
        return this.codigoPostal;
    }

    setCodigoPostal(codigoPostal:number){
        this.codigoPostal=codigoPostal;
    }

    getPoblacion(){
        return this.poblacion;
    }

    setPoblacion(poblacion:string){
        this.poblacion=poblacion;
    }

    getProvincia(){
        return this.provincia;
    }

    setProvincia(provincia:string){
        this.provincia=provincia;
    }

}