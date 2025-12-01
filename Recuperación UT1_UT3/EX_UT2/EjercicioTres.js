'use strict';

function closeStrings(palabra1, palabra2) {

    if (palabra1.length !== palabra2.length) {
        return false;
    }

    let mapaUno = {};
    let mapaDos = {};


    for (let i = 0; i < palabra1.length; i++) {
        let letra = palabra1[i];
        if (mapaUno[letra] === undefined) {
            mapaUno[letra] = 1;
        } else {
            mapaUno[letra]++;
        }
    }


    for (let i = 0; i < palabra2.length; i++) {
        let letra = palabra2[i];
        if (mapaDos[letra] === undefined) {
            mapaDos[letra] = 1;
        } else {
            mapaDos[letra]++;
        }
    }

    for (let letra in mapaUno) {
        if (mapaDos[letra] === undefined) {
            return false;
        }
    }

    let primero = [];
    let segundo = [];

    for (let letra in mapaUno) {
        primero.push(mapaUno[letra]);
    }

    for (let letra in mapaDos) {
        segundo.push(mapaDos[letra]);
    }

    primero.sort();
    segundo.sort();

    for (let i = 0; i < primero.length; i++) {
        if (primero[i] !== segundo[i]) {
            return false;
        }
    }

    return true;
}


console.log(closeStrings("abc", "bca")); // true
console.log(closeStrings("a", "aa"));  // false
console.log(closeStrings("cabbba", "abbccc")); // true