import {
    Mamifero
} from "./mamiferos";

export class Omnivoro extends Mamifero {

    constructor(pNombre: string, pEspecie: string, pTamaño: string) {
        super(pNombre, pEspecie, pTamaño)
    }

    public setAlimentacion(): void {
        this.alimentacion = "Carnes y vegetales";
    }

    public getAlimentacion() {
        return this.alimentacion;
    }
}