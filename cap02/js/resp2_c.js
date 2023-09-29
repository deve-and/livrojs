const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    
    let terceiro = preco / 2;
    let desconto = (preco * 2) + terceiro;

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${desconto.toFixed(2)}`;
    resp2.innerText = `O terceiro produto custa apenas R$: ${terceiro.toFixed(2)}`;

    e.preventDefault();
})