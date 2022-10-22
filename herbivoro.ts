import {
    Mamifero
} from "./mamiferos";

export class Herbivoro extends Mamifero {

    constructor(pNombre: string, pEspecie: string, pTamaño: string) {
        super(pNombre, pEspecie, pTamaño)
    }

    public setAlimentacion(): void {
        this.alimentacion = "vegetal";
    }
}