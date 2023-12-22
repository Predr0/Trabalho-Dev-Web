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
        imagemElement.src ='./Component/image/vasco.jpg';
        textoElement.innerText = 'Você não é nem um flamenguista.. Você deve ser um vascaíno';
    } else if (pontuacao >= 4 && pontuacao <= 6) {
        imagemElement.src = '/Component/image/gabigol-marca-para-o-flamengo-na-final-da-libertadores-contra-o-river-plate-1586482181091_v2_4x3.jpg';
        textoElement.innerText = 'Parece que você é um flamenguista médio de 2019, não é problema, mas você ainda pode ser mais fanático e amar mais o clube!';
    } else if (pontuacao >= 7 && pontuacao <= 9) {
        imagemElement.src = 'caminho-para-imagem-Z.jpg';
        textoElement.innerText = 'Texto para pontuação de 7 a 9 pontos';
    } else {
        // Pontuação fora do intervalo especificado
        imagemElement.src = '';
        textoElement.innerText = '';
    }
}