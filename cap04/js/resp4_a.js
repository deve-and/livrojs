const frm = document.querySelector("form");
const resp = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    resp.innerText = numero % 2 == 0 ? `${numero} é par` : `${numero} é ímpar`

    // if (numero % 2 == 0) {
    //     resp.innerText = `${numero} é Par`;
    // } else {
    //     resp.innerText = `${numero} é Ímpar`
    // }
})