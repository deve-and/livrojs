/*
    A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$ 12,00. Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos.
*/

const prompt = require("prompt-sync")();

const pessoas = Number(prompt("Digite o número de pessoas: "));
const peixes = Number(prompt("Digite o número de peixes: "));

let pagar;
if (peixes <= pessoas) {
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas ) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)