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
    let carros = Array(n);

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

