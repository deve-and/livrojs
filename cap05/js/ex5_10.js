/*
    Elaborar um programa para um aloja que lia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela, considerando essa situação.
*/

const prompt = require('prompt-sync')();
const valor = Number(prompt('Valor: R$ '));
const numParcela = Number(prompt('Número de Parcelas: '));

const valorParcela = Math.floor(valor / numParcela);
const valorTotal = valorParcela + (valor % numParcela);

for (let i = 1; i < numParcela; i++) {
  console.log(`${i}ª Parcela: R$ ${valorParcela.toFixed(2)}`);
}
console.log(`${numParcela}ª Parcela: R$ ${valorTotal.toFixed(2)}`);
