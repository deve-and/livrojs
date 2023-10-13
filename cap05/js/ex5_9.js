/* 
    Elaborar um programa que leia o nome de um produto e o n[umero de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha, conforme exemplo de execução do programa, demonstrado a seguir.

        Produto: Suco Natural de Uva
        Número de Etiquetas: 7
        Suco Natural de Uva     Suco Natural de Uva
        Suco Natural de Uva     Suco Natural de Uva
        Suco Natural de Uva     Suco Natural de Uva
        Suco Natural de Uva
*/

const prompt = require("prompt-sync")();
const produto = prompt("Produto: ");
const num = Number(prompt("Número de Etiquetas: "));

for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`); 
}

if (num == 1) {
    console.log(produto)
}


