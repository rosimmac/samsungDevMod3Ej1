export class Mail {
    private tipo: string;
    private direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo: string) {
        this.tipo = tipo;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion: string) {
        this.direccion = direccion;
    }


}


