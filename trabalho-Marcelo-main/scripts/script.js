// Declarar pontuacao como variável global
var pontuacao = 0;

document.addEventListener("DOMContentLoaded", function () {
    //Localizar os formulários para isso
    var forms = document.querySelectorAll('form');

    // Adicionar evento de clique para cada formulário
    forms.forEach(function (form) {
        form.addEventListener('click', function (event) {
            if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
                // verificar se está certa a resposta
                if (event.target.id === 'correta') {
                    //subir 1 ponto se a resposta tiver certa
                    pontuacao++;
                    console.log('Resposta Correta! Pontuação: ' + pontuacao);
                } else {
                    console.log('Resposta Incorreta. Pontuação: ' + pontuacao);
                }
            }
        });
    });
});

function exibirResultado() {
    var imagemElement = document.getElementById('resultado-imagem');
    var textoElement = document.getElementById('resultado-texto');

    // Lógica para determinar a imagem e o texto com base na pontuação
    if (pontuacao >= 1 && pontuacao <= 3) {
        imagemElement.src ='';
        textoElement.innerText = 'Você não é nem um flamenguista.. Você deve ser um vascaíno';
    } else if (pontuacao >= 4 && pontuacao <= 6) {
        imagemElement.src = 'caminho-para-imagem-Y.jpg';
        textoElement.innerText = 'Texto para pontuação de 4 a 6 pontos';
    } else if (pontuacao >= 7 && pontuacao <= 9) {
        imagemElement.src = 'caminho-para-imagem-Z.jpg';
        textoElement.innerText = 'Texto para pontuação de 7 a 9 pontos';
    } else {
        // Pontuação fora do intervalo especificado
        imagemElement.src = '';
        textoElement.innerText = '';
    }
}