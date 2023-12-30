const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const chin = Number(frm.inChin.value);
    const ano = Number(frm.inAno.value);

    // Cria variável do tipo string, que irá retornar a resposta
    let resposta = "";
    let total = chin;

    for (let i = 1; i <= ano; i++) {
        resposta = resposta + i + "º Ano: " + total + " Chinchilas\n";
        total = total * 3;  
    }

    // alterando o conteúdo da tag resposta
    resp.innerText = resposta;
})