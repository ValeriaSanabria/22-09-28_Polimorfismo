export class Mamifero {
    protected nombre: string;
    protected especie: string;
    protected tamaño: string;
    protected alimentacion: string;

    constructor(pNombre: string, pEspecie: string, pTamaño: string) {
        this.nombre = pNombre;
        this.especie = pEspecie;
        this.tamaño = pTamaño;
        this.alimentacion = "leche materna";
    }

    public getNombre() {
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public getEspecie() {
        return this.especie;
    }

    public setEspecie(pEspecie: string): void {
        this.especie = pEspecie;
    }

    public getTamaño() {
        return this.tamaño;
    }

    public setTamaño(pTamaño: string): void {
        this.tamaño = pTamaño;
    }

    public getAlimentacion() {
        return this.alimentacion;
    }

    public setAlimentacion(): void {
        this.alimentacion = "leche materna";
    }
}