/**
 * Autor: Asmith Dahjer Rebolledo
 */

// funciones auxiliares

/**
 * generador de numeros enteros aleatorios desde 0 hasta n - 1
 */ 
function RandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * generador de numeros aleatorios con rango entre n y m
 */
function RandomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * determina si un numero es primo o no (el 1 no se considera numero primo)
 */
function IsPrimo(n) {
    for (let i = 2; i < 2; i++) {
        if (n % 2 === 0) return false;
    }

    return n !== 1;
}

/**
 * serie de fibonacci
 */
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Ejercicio 1

function Ejercicio1(n = 5) {

    let amarillo = 0;
    let rosa = 0;
    let roja = 0;
    let verde = 0;
    let azul = 0;
    let carros = new Array(n);

    for (let i = 0; i < carros.length; i++) {
        carros[i] = RandomInt(10);

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
        edades[i] = RandomInt(6);
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
    console.log(`el ${(cat1/edades.length)*100}% estan entre 0 y 1 a??os.`);
    console.log(`el ${(cat2/edades.length)*100}% tienen mas de 1 a??os pero menos de 3.`);
    console.log(`y el ${(cat3/edades.length)*100}% tienen 3 o mas a??os.`);
}

// ejercicio 3
function Ejercicio3(n = 5) {
    let salarioHora = 20;
    let salarioExtra = 25;
    let horasTrabajadas = new Array(n);
    let salario = new Array(n);

    // para este ejercicio generaran una cantidad de horas aleatorios desde 20 hasta 60
    for (let i = 0; i < n; i++) {
        horasTrabajadas[i] = RandomIntRange(20, 60);
        console.log(horasTrabajadas[i]);
    }

    // calcular el salario dependiendo de las horas que se trabajan
    for (let i = 0; i < n; i++) {
        if (horasTrabajadas[i] <= 40) {
            salario[i] = horasTrabajadas[i] * 20;
        } else if (horasTrabajadas[i] > 40) {
            // variable auxiliar para tener el total de horas extras
            let extras = horasTrabajadas[i] - 40;
            salario[i] = ((horasTrabajadas[i] - extras) * 20) + (extras * 25);
        }

        console.log(`el trabajador ${i+1} trabajo ${horasTrabajadas[i]} horas esta semana y se le pago un total de: $${salario[i]}`);
    }
}

// ejercicio 4
function Ejercicio4(hombres = 5, mujeres = 5) {
    let total = hombres + mujeres;
    let edadHombres = new Array(hombres);
    let edadMujeres = new Array(mujeres);
    let promHombres = 0;
    let promMujeres = 0;
    let promTotal = 0;

    // para este ejercicio se utilizaran edades aleatoreas entre 16 y 22 a??os
    // se calculara el promedio de inmediato
    console.log('edades de los hombres: ');
    for (let i = 0; i < hombres; i++) {
        edadHombres[i] = RandomIntRange(16, 22);
        console.log(edadHombres[i]);
        promHombres += edadHombres[i];
        promTotal += edadHombres[i];
    }
    console.log('edades de las mujeres: ');
    for (let i = 0; i < mujeres; i++) {
        edadMujeres[i] = RandomIntRange(16, 22);
        console.log(edadMujeres[i]);
        promMujeres += edadMujeres[i];
        promTotal += edadMujeres[i];
    }
    promHombres = promHombres / hombres;
    promMujeres = promMujeres / mujeres;
    promTotal = promTotal / total;

    console.log(`La edad promedio de hombres es de ${promHombres}`);
    console.log(`La edad promedio de muejeres es de ${promMujeres}`);
    console.log(`La edad promedio total es de ${promTotal}`);

}

// ejercicio 5
function Ejercicio5(n = 10) {
    let numeros = new Array(n);

    console.log('los numeros generados son:')
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = RandomIntRange(1, 50);
        console.log(numeros[i]);
    }

    console.log(`El numero menor es ${Math.min(...numeros)}`);

}

// ejercicio 6
function Ejercicio6() {

    let n = prompt('ingrese la cantidad de personas a pesar:');
    n = parseInt(n);

    for (let i = 0; i < n; i++) {
        let pesoAnterior, peso, dif;
        let suma = 0;
        pesoAnterior = prompt(`(persona ${i+1}) ingrese su peso anterior:`);
        pesoAnterior = pesoAnterior.replace(',', '.');
        pesoAnterior = parseFloat(pesoAnterior);

        //calcular el promedio de peso actual
        for (let i = 0; i < 10; i++) {
            // variable auxiliar para reemplazar las comas por puntos decimales
            let aux;
            aux = prompt(`Ingrese el peso dado por la vascula #${i+1}:`);
            aux = aux.replace(',', '.');
            suma += parseFloat(aux); 
        }

        peso = suma / 10;
        dif = peso - pesoAnterior

        if (dif < 0) {
            alert(`BAJO ${Math.abs(dif).toFixed(2)}Kg`);
        } else if (dif > 0) {
            alert(`SUBIO ${dif.toFixed(2)}Kg`);
        } else {
            alert('Se mantuvo en el mismo peso');
        }
    }
}

// ejercicio 7
function Ejercicio7() {
    let total = 0;
    let n = prompt('Cuantos productos diferentes a tomado:')
    n = parseInt(n);

    for (let i = 0; i < n; i++) {
        let prod = prompt(`Cuanto cuesta el producto ${i+1}:`);
        let cant = prompt(`Cuantos del producto ${i+1} a tomado:`);

        if (prod == NaN || cant == NaN) return;

        total += (parseInt(prod)*parseInt(cant));
    }
    
        alert('El total es: ' + total);
    
}


// ejercicio 8
function Ejercicio8() {
    let precio = prompt('Ingrese el valor de las boletas:');
    // de 5 a 14 a??os
    let cat1 = 0.35;
    // de 15 a 19 a??os
    let cat2 = 0.25;
    // de 20 a 45 a??os
    let cat3 = 0.10;
    // de 46 a 65 a??os
    let cat4 = 0.25;
    // de 66 en adelante
    let cat5 = 0.35;

    // el dinero que pierde el teatro es igual a multiplicar el precio de la entrada por el porcentaje de descuento
    alert(`El teatro pierde ${precio * cat1} por cada cliente entre 5 a 14 a??os.`);
    alert(`El teatro pierde ${precio * cat2} por cada cliente entre 15 a 19 a??os.`);
    alert(`El teatro pierde ${precio * cat3} por cada cliente entre 20 a 45 a??os.`);
    alert(`El teatro pierde ${precio * cat4} por cada cliente entre 46 a 65 a??os.`);
    alert(`El teatro pierde ${precio * cat5} por cada cliente de 66 a??os en adelante.`);

}

// ejercicio 11
function Ejercicio11() {
    let suma = 0;
    let producto = 1;
    let promedio;
    let n = prompt('Ingrese la cantidad de numeros que desea generar:');

    alert('Los numeros obtenidos seran mostrados por consola:');
    for (let i = 0; i < n; i++) {
        let numero = RandomIntRange(1, 100);
        
        // validar si el numerop es primo
        console.log(numero);
        if (IsPrimo(numero)) {
            suma += numero;
            producto *= numero;
        }
    }
    promedio = suma / n;

    alert(`la sumatoria de los ${n} numeros generados fue: ${suma}`);
    alert(`la productoria de los ${n} numeros generados fue: ${producto}`);
    alert(`el promedio de los ${n} numeros generados fue: ${promedio}`);
}

// ejercicio 12
function Ejercicio12() {
    let par = 0;
    let impar = 0;
    let suma = 0;
    let producto = 1;
    let promedio;
    let numero = prompt('Digite un numero:');

    // si es un decimal, no ejecuta el codigo.
    numero = numero.replace(',', '.');
    let isFloat = parseFloat(numero) - parseInt(numero) != 0;
    if (isFloat) return;

    let digitos = numero.split('');

    digitos.forEach(digito => {
        digito = parseInt(digito);
        suma += digito;
        producto *= digito;

        if (digito % 2 === 0) par++;
        else impar++;
    });

    promedio = suma / digitos.length;

    alert(`La sumatoria es: ${suma}`);
    alert(`La productoria es: ${producto}`);
    alert(`El promedio es: ${promedio}`);
    alert(`La cantidad de numeros pares: ${par}`);
    alert(`La cantidad de numeros impares: ${impar}`);
}

// ejercicio 13
function Ejercicio13() {
    let par = 0;
    let impar = 0;
    let cero = 0;

    let n = prompt('Digite la cantidad de numeros de la serie de fibonacci a tomar: (maximo 12)')
    let resultados = [];

    if (n > 12) return;

    alert('Los numeros aleatorios tomados seran mostrados por consola.')
    for (let i = 0; i < n; i++) {
        let numero = RandomInt(n+1);
        console.log(numero);
        resultados.push(fibonacci[numero]);
    }

    resultados.forEach(resultado => {
        if (resultado === 0) cero++;
        else if (resultado % 2 === 0) par++;
        else impar++;
    });

    alert(`La cantidad de numeros pares: ${par}`);
    alert(`La cantidad de numeros impares: ${impar}`);
    alert(`La cantidad de ceros: ${cero}`);

}

// ejercicio 14
function Ejercicio14() {
    let a = prompt('ingrese el primer numero:')
    let b = prompt('ingrese el segundo numero:')

    const MCD = function(a, b) {
        if (b === 0) return a;

        return MCD(b, a%b);
    }

    alert(`El MCD entre ${a} y ${b} es: ${MCD(a, b)}`);

}

// ejercicio 15
function Ejercicio15() {
    let paisA = 25;
    let paisB = 19.9;
    let tasaA = 0.02;
    let tasaB = 0.03;
    let year = 1994;

    let aumentoAnualA = paisA * tasaA;
    let aumentoAnualB = paisB * tasaB;

    while (paisB <= paisA) {
        paisA += aumentoAnualA;
        paisB += aumentoAnualB;

        year++;
    }

    alert(`En el a??o ${year} el pais B supero la poblacion del pais A, teniendo ${paisB.toFixed(2)} y ${paisA.toFixed(2)} millones de habitantes respectivamente`);

}