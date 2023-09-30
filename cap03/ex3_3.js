/*
    Elaborar um programa par auma empresa que leia o salário e o tempo que o funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o n;umero de quadriênios a que o funcionário tem direito e o salário final.
*/

const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo (anos): "));

const quadrienio = Math.floor(tempo / 4);
const acrescimo = salario * quadrienio / 100;

console.log(`\nQuadriênios: ${quadrienio}`);
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`);