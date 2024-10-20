document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let totalPontos = 0;
    
    // Captura todas as respostas selecionadas
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    
    // Soma os valores das respostas corretas
    respostas.forEach(function(resposta) {
        totalPontos += parseInt(resposta.value);
    });
    
    // Exibe o resultado
    document.getElementById('pontuacao').textContent = totalPontos;
    document.getElementById('resultado').style.display = 'block';
});
