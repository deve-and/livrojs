// Crie referência ao form e ao elemento h3 ( onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Crie um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // Obtém o nome digitado ao form
    resp.innerText = `Olá ${nome}` // exibe a resposta do programa
    e.preventDefault() // evita envio do form
})