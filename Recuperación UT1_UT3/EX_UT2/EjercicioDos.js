'use strict';
function indiceDiferenciaMedia(nums) {
    let mejorIndice = 0;
    let mejorDiferencia = Infinity;

    for (let i = 0; i < nums.length; i++) {

        let sumaIzquierda = 0;
        for (let j = 0; j <= i; j++) {
            sumaIzquierda += nums[j];
        }

        let mediaIzquierda = Math.floor(sumaIzquierda / (i + 1));


        let elementosDerecha = nums.length - i - 1;
        let sumaDerecha = 0;
        let mediaDerecha = 0;

        if (elementosDerecha > 0) {
            for (let z = i + 1; z < nums.length; z++) {
                sumaDerecha += nums[z];
            }

            mediaDerecha = Math.floor(sumaDerecha / elementosDerecha);
        }

        const diferencia = Math.abs(mediaIzquierda - mediaDerecha);

        if (diferencia < mejorDiferencia) {
            mejorDiferencia = diferencia;
            mejorIndice = i;
        }
    }

    return mejorIndice;
}

console.log(indiceDiferenciaMedia([2, 5, 3, 9, 5, 3]));// 3
console.log(indiceDiferenciaMedia([0])); // 0