const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let resposta = "";

    // Cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // A variável resposta vai acumular os novos conteúdos
        resposta = `${resposta}${num} x ${i} = ${num * i} \n`;
    }

    // o conteúdo da tag pre é alterado para exibir a tabuada do número.
    resp.innerText = resposta
})