const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    let desconto = Math.floor(preco * 2);

    resp1.innerText = `Promoção de ${produto}`
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault();
})