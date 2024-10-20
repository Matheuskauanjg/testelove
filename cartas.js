// Lista de cartas com as mensagens correspondentes
const cartas = [
    "Desde o primeiro momento em que te vi, soube que você seria alguém especial na minha vida. Cada dia ao seu lado só fortalece esse sentimento, e estou cada vez mais certo de que fiz a escolha certa ao te amar.",
    "Você é a pessoa com quem posso ser completamente eu mesmo, sem medo de julgamentos. Nos seus braços, encontro a paz que preciso e, no seu sorriso, a alegria que completa meus dias.",
    "Sonho com o dia em que acordarei ao seu lado todas as manhãs, construindo uma vida cheia de amor e felicidade. Cada passo que damos me aproxima desse sonho, e sei que juntos podemos conquistar tudo.",
    "Há tantas coisas sobre você que me encantam: seu jeito de falar, seu olhar, a forma como se preocupa com os outros. Mas o que mais me encanta é o fato de que, em você, encontrei o amor verdadeiro.",
    "De todas as aventuras que vivemos juntos, há momentos que guardo com carinho no coração. As risadas, as conversas até tarde da noite, e até os momentos de silêncio que compartilhamos, tudo é inesquecível com você.",
    "Estar longe de você é difícil, mas ao mesmo tempo me faz perceber o quanto te amo. A saudade só reforça o quanto você é essencial na minha vida. Mal posso esperar para estar ao seu lado de novo.",
    "Você me inspira a ser uma pessoa melhor todos os dias. Seu amor, sua força e sua determinação me mostram o verdadeiro significado de parceria, e eu sou grato por ter você ao meu lado nessa jornada.",
    "Nosso amor é único, e isso me faz sentir especial a cada dia. Não existe nada no mundo que possa se comparar ao que temos, e quero te lembrar o quanto valorizo esse sentimento e essa conexão que só nós dois compartilhamos.",
    "Cada vez que você sorri, eu também sorrio. Você é a razão da minha felicidade e da minha alegria. Não há nada que eu queira mais do que continuar fazendo parte da sua vida e te ver sorrindo sempre.",
    "Prometo que, não importa o que aconteça, sempre estarei ao seu lado. Juntos, somos mais fortes, e o amor que sinto por você vai além de qualquer obstáculo. Eu te amo mais do que palavras podem expressar, e esse amor só cresce a cada dia."
];

// Seleciona todas as cartas
const cartasElementos = document.querySelectorAll('.carta');
const mensagemElemento = document.getElementById('mensagem');
const conteudoMensagem = document.getElementById('conteudo-mensagem');
const fecharBtn = document.getElementById('fechar-btn');

// Adiciona evento de clique em cada carta
cartasElementos.forEach(carta => {
    carta.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        conteudoMensagem.textContent = cartas[id - 1];
        mensagemElemento.classList.remove('mensagem-oculta');
    });
});

// Evento para fechar a mensagem
fecharBtn.addEventListener('click', function() {
    mensagemElemento.classList.add('mensagem-oculta');
});
