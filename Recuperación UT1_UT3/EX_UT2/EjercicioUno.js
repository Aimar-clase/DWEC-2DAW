'use strict';



function contarBitsPrimos(left, right) {
    let contador = 0;

    for (let numero = left; numero <= right; numero++) {
        const bits = numero.toString(2);
        let numBits = 0;

        // cuento los 1 del binario
        for (let i = 0; i < bits.length; i++) {
            if (bits[i] === "1") {
                numBits++;
            }
        }

        if (esPrimo(numBits)) {
            contador++;
        }
    }

    return contador;
}


function esPrimo(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(contarBitsPrimos(6, 10));
console.log(contarBitsPrimos(10, 15));
