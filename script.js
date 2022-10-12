/**
 * Autor: Asmith Dahjer Rebolledo
 */

// Ejercicio 1

function Ejercicio1(n = 5) {

    let amarillo = 0;
    let rosa = 0;
    let roja = 0;
    let verde = 0;
    let azul = 0;
    let carros = new Array(n);

    for (let i = 0; i < carros.length; i++) {
        carros[i] = Math.floor(Math.random() * 10)

        console.log(`Ultimo digito de la placa del carro ${i+1} es: ${carros[i]}`);
    }

    for (let i = 0; i < carros.length; i++) {
        switch (carros[i]) {
            case 1:
            case 2:
                amarillo++;
                break;
            case 3:
            case 4:
                rosa++;
                break;
            case 5:
            case 6:
                roja++;
                break;
            case 7:
            case 8:
                verde++;
                break;
            case 9:
            case 0:
                azul++;
                break;
        }
    }

    console.log("")

    console.log(
        `La cantidad de carros que entraron fueron ${n}:
        ${amarillo} carros tiene la etiqueta amarillo
        ${rosa} carros tienen la etiqueta rosa
        ${roja} carros tiene la etiqueta roja
        ${verde} carros tienen la etiqueta verde
        ${azul} carros tienen la etiqueta azul`
    )

}

// ejercicio 2
/**
 * cambiar el valor de la variable "seleccion":
 * 0: elefantes
 * 1: jirafas
 * 2: chimpances
 */
function Ejercicio2(seleccion = 0) {
    let elefantes = 20;
    let jirafas = 15;
    let chimpaces = 40;
    let edades;
    let animal;

    // edades entre 0 y 1
    let cat1 = 0;
    // edades donde 1 < x < 3
    let cat2 = 0;
    // edades > 3
    let cat3 = 0;
    
    // definir la cantidad de muestra de edades que se van a tomar.
    switch (seleccion) {
        case 0:
            edades = new Array(elefantes);
            animal = 'elefantes';
            break;

        case 1:
            edades = new Array(jirafas)
            animal = 'jirafas';
            break;

        case 2:
            edades = new Array(chimpaces);
            animal = 'chimpances';
            break;
    
        default:
            console.error("Opcion invalida");
            break;
    }

    // generar aleatoriamente edades entre 0 y 5
    console.log('Edades de la muestra:\n')
    for (let i = 0; i < edades.length; i++) {
        edades[i] = Math.floor(Math.random() * 6);
        console.log(edades[i]);
    }

    // calcular cuantos pertenecen a cada categoria
    for (let i = 0; i < edades.length; i++) {
        if  (edades[i] > 0 && edades[i] <= 1) {
            cat1++;
        } else if(edades[i] > 1 && edades[i] < 3) {
            cat2++;
        } else if(edades[i] >= 3) {
            cat3++;
        }
    }
    
    // calcular porcentajes
    console.log(`se tomo encuenta una muestra de ${edades.length} ${animal} y se obtuvo lo siguiente:`);
    console.log(`el ${(cat1/edades.length)*100}% estan entre 0 y 1 años.`);
    console.log(`el ${(cat2/edades.length)*100}% tienen mas de 1 años pero menos de 3.`);
    console.log(`y el ${(cat3/edades.length)*100}% tienen 3 o mas años.`);
}
