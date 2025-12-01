'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const numerosPrompt = prompt("Dame una lista de numeros separados por comas");
    if (validPrompt(numerosPrompt)) {
        let lista = numerosPrompt;
        let pares = countGoodPairs(validPrompt(numerosPrompt));

        const titulo = document.createElement("h2");
        titulo.textContent = "Resultado";
        document.body.appendChild(titulo);

        const listaParrafo = document.createElement("p");
        listaParrafo.textContent = "Lista: " + lista;
        document.body.appendChild(listaParrafo);

        const listaPares = document.createElement("p");
        listaPares.textContent = "Numero de pares buenos: " + pares;
        document.body.appendChild(listaPares);
    } else {
        const errorMensaje = document.createElement("p");
        errorMensaje.textContent = "Error";
        document.body.appendChild(errorMensaje);
    }
});


function countGoodPairs(nums) {
    let contador = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {

            if (i < j && nums[i] === nums[j]) {
                contador++;
            }
        }
    }
    return contador;
}

function validPrompt(input) {
    let arrayInput = input.split(",");
    let nums = [];

    for (let i = 0; i < arrayInput.length; i++) {
        let indiceLimpio = arrayInput[i].trim();
        if (!isNaN(arrayInput[i])) {
            nums.push(Number(indiceLimpio))
        } else {
            return false;
        }
    }
    return nums;
}

