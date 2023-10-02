/*
    Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições:
     - Cada parcela deve ser de no mínimo, R$ 20,00;
     - O número máximo de parcelas permitido é 6.
*/

const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o valor da compra R$: "));
const aux = Math.floor(valor / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcelas = valor / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcelas.toFixed(2)}`)