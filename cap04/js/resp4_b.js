const frm = document.querySelector("form");
const resp = document.querySelector("h5");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(frm.inVelPermitida.value);
    const velCondutor = Number(frm.inVelCondutor.value);

    let velDiferenca = velCondutor - velPermitida;
    if (velDiferenca <= 0) {
        resp.innerText = `Situação: Sem Multa`;
    } else if (velDiferenca <= 0.2 * velPermitida) {
        resp.innerText = `Situação: Multa Leve`;
    } else {
        resp.innerText = `Situação: Muita Grave`;
    }
})