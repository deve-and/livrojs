const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let temDivisor = 0; // declara e inicializa a variável do tipo flag

    for (let i = 2; i <= numero / 2; i++) { // percorre os possíveis disiroes
        if (numero % i == 0) {  // se tem um divisor
            temDivisor = 1;     // muda a flag
            break   // sai da repetição
        }
    }
    if (numero > 1 && !temDivisor) {    // se numero for maior que 1 e não possuir divisor
        resp.innerText = `${numero} É primo`
    } else {
        resp.innerText = `${numero} Não é primo`
    }
})