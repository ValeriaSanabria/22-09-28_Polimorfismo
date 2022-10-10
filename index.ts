import {
    Mamifero
} from "./mamiferos";
import {
    Carnivoro
} from "./carnivoro";
import {
    Herbivoro
} from "./herbivoro";

let Mamifero1 = new Mamifero("Ballena", "Cetaceo", "Muy grande");
Mamifero1.setAlimentacion();
console.log(Mamifero1);
console.log("·····························································································");

let carnivoro1 = new Carnivoro("Leon", "Felino", "Grande");
carnivoro1.setAlimentacion();
console.log(carnivoro1);
console.log("El animal " + carnivoro1.getNombre() + " tiene una alimentacion a base de " + carnivoro1.getAlimentacion());
console.log("·····························································································");

let herbivoro1 = new Herbivoro("Koala", "Marsupial", "Pequeño");
herbivoro1.setAlimentacion();
console.log(herbivoro1);
console.log("El animal " + herbivoro1.getNombre() + " tiene una alimentacion a base " + herbivoro1.getAlimentacion());