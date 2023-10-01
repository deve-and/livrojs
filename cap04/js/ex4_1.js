const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inPrimeiraNota.value);
    const nota2 = Number(frm.inSegundaNota.value);

    const media = (nota1 + nota2) / 2;
    resp1.innerText = `Média das Notas: ${media.toFixed(1)}`;

    if (media >= 7) {
        // Altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "blue";
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}. Você está em exame`;
        resp2.style.color = "green";
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
        resp2.style.color = "red";
    }

    e.preventDefault();
})