// Função principal para decifrar o diário
function decipherDiary(numberStr) {
    const result = [];

    // Função auxiliar recursiva para gerar todas as combinações possíveis
    function backtrack(index, currentCombination) {
        // Se chegamos ao final da string, adicionamos a combinação atual ao resultado
        if (index === numberStr.length) {
            result.push(currentCombination);
            return;
        }

        // Pegamos o dígito atual (1-9)
        const singleDigit = numberStr[index];
        if (singleDigit !== '0') { // 0 não tem correspondência no alfabeto
            const char = String.fromCharCode(96 + parseInt(singleDigit)); // 'a' tem código 97
            backtrack(index + 1, currentCombination + char);
        }

        // Verificamos se podemos pegar dois dígitos (10-26)
        if (index < numberStr.length - 1) {
            const twoDigits = numberStr.substring(index, index + 2);
            const num = parseInt(twoDigits);
            if (num >= 10 && num <= 26) {
                const char = String.fromCharCode(96 + num);
                backtrack(index + 2, currentCombination + char);
            }
        }
    }

    // Iniciamos o processo com índice 0 e string vazia
    backtrack(0, '');

    return result;
}

// Função para exibir os resultados na página
function displayResults(results) {
    const resultOutput = document.getElementById('result-output');
    resultOutput.innerHTML = ''; // Limpa resultados anteriores

    if (results.length === 0) {
        resultOutput.innerHTML = '<div class="result-item">Nenhuma combinação válida encontrada.</div>';
        return;
    }

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = `'${result}'`;
        resultOutput.appendChild(resultItem);
    });
}

// Event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const decipherBtn = document.getElementById('decipher-btn');
    const resetBtn = document.getElementById('reset-btn');
    const codeInput = document.getElementById('code-input');

    // Evento para o botão DECIFRAR
    decipherBtn.addEventListener('click', () => {
        const input = codeInput.value.trim();

        // Validação da entrada
        if (!input) {
            alert('Por favor, insira um código numérico.');
            return;
        }

        if (!/^\d+$/.test(input)) {
            alert('O código deve conter apenas números.');
            return;
        }

        // Decifra e exibe os resultados
        const results = decipherDiary(input);
        displayResults(results);
    });

    // Evento para o botão RETORNAR
    resetBtn.addEventListener('click', () => {
        codeInput.value = '';
        document.getElementById('result-output').innerHTML = '';
    });

    // Permite pressionar Enter no input para decifrar
    codeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            decipherBtn.click();
        }
    });
});