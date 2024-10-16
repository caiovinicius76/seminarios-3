let valorPago = 0;

function adicionarValorPago(valor) {
    valorPago += valor;
    document.getElementById('valorPago').innerText = valorPago;
}

function calcularTroco() {
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);

    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert("Por favor, insira um valor total válido.");
        return;
    }

    if (valorPago < valorTotal) {
        alert("O valor pago é menor que o valor total!");
        return;
    }

    const troco = valorPago - valorTotal;
    document.getElementById('troco').innerText = troco.toFixed(2);
}
