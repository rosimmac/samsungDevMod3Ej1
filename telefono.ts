export class Telefono {
    private tipo: string;
    private numero: number;

    constructor(tipo: string, numero: number) {
        this.tipo = tipo;
        this.numero = numero;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo: string) {
        this.tipo = tipo;
    }

    getNumero() {
        return this.numero;
    }

    setNumero(numero: number) {
        this.numero = numero;
    }
}