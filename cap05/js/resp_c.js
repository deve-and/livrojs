const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const reps2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNum.value);

    // como 1 é um divisor universal, já iniciamos com ele
    let divisores = "Divisores do " + numero + ": 1";
    let soma = 1;

    for (let i = 2; i <= numero / 2; i++) {
        if(numero % i == 0) {
            divisores = divisores + ", " + i; // virgula + i (evita a última virgula)
            soma += i;
        }
    }

    divisores = divisores + " (Soma: " + soma + ")";

    resp1.innerText = divisores;

    // verifica se é perfeito
    if(numero == soma) {
        reps2.innerText = `${numero} É um número perfeito!`;
    } else {
        reps2.innerText = `${numero} Não é um número perfeito!`;
    }
});