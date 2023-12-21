
        document.addEventListener("DOMContentLoaded", function () {
            //Localizar os formulários para isso
            var forms = document.querySelectorAll('form');

            //Começar com 0 pontos
            var pontuacao = 0;

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