const frm = document.querySelector("form");
const reps = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let estrelas = ""; // variável que irá contatenar estrelas e traços
    for (let i = 1; i <= numero; i++) { // cria um laço de repetição até o núemero
        if (i % 2 == 1) {
            estrelas += "*"; // na posição ímpar do i: *
        } else {
            estrelas += "-"; // na posição par do i: -
        }
    }
    reps.innerText = estrelas;   // exibe as estrelas
})