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

    exibirNotasTroco(troco);
}

function exibirNotasTroco(troco) {
    const notas = [100, 50, 20, 10, 5, 2];
    const containerNotas = document.getElementById('notasTroco');
    containerNotas.innerHTML = ""; // Limpa as notas exibidas anteriormente

    for (let nota of notas) {
        const quantidade = Math.floor(troco / nota);
        if (quantidade > 0) {
            troco %= nota;
            for (let i = 0; i < quantidade; i++) {
                const notaImg = document.createElement('img');
                notaImg.src = `web_sm3/nota${nota}.png`;
                notaImg.alt = `Nota de R$ ${nota}`;
                containerNotas.appendChild(notaImg);
            }
        }
    }
}
