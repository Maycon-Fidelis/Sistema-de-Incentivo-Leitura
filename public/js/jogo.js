// Pegando o array
var palavrasString = document.querySelector('script[data-palavras]').getAttribute('data-palavras');
var palavrasArray = palavrasString.split(',');

// Pegando valores do HTML
const vidas = document.getElementById('vidas');
const estrelas = document.getElementById('estrelas');
const palavra_falar = document.getElementById('palavra_falar');

// Variaveis padrões
let qntd_vidas = 10;
let qntd_estrelas = 0;

vidas.textContent = qntd_vidas;
estrelas.textContent = qntd_estrelas;

// Função para mostrar se o jogador errou ou acertou //
function mensagem_ao_jogador(elemento_html) {
    const elemento = document.getElementById(elemento_html);
    const sobreposicao = document.getElementById('sobreposicao');
    sobreposicao.style.opacity = 0.5;
    elemento.style.display = 'block';
    setTimeout(function () {
        elemento.classList.add('fade-out');
        elemento.style.display = 'none';
        sobreposicao.style.opacity = 1;
        elemento.classList.remove('fade-out');
    }, 2000);
}
// Função para mostrar se o jogador errou ou acertou //

// Função para pegar o valor da URL //

var url = window.location.href;

var regex = /\/(\d+)\/jogo/;

var pegar_valor_url = url.match(regex);

    var valorEntreUltimaBarraEJogo = parseInt(pegar_valor_url[1]); 
    console.log(valorEntreUltimaBarraEJogo);

// Função para pegar o valor da URL //

// Função para pontuar de acordo com o contar a quantidade de questões apartir do nível//

let estrelas_para_alcançar;

if(valorEntreUltimaBarraEJogo === 1 || valorEntreUltimaBarraEJogo === 4 || valorEntreUltimaBarraEJogo === 7) {
    estrelas_para_alcançar = 10;
    console.log('estrelas para alcançar: ', estrelas_para_alcançar);
} else if (valorEntreUltimaBarraEJogo === 2 || valorEntreUltimaBarraEJogo === 5 || valorEntreUltimaBarraEJogo === 8) {
    estrelas_para_alcançar = 15;
    console.log('estrelas para alcançar: ', estrelas_para_alcançar);
} else if (valorEntreUltimaBarraEJogo === 3 || valorEntreUltimaBarraEJogo === 6 || valorEntreUltimaBarraEJogo === 9) {
    estrelas_para_alcançar = 20;
    console.log('estrelas para alcançar: ', estrelas_para_alcançar);
}

// Função para pontuar de acordo com o contar a quantidade de questões apartir do nível//

// Salvar pontuação do jogo //

let nivel1 = parseInt(localStorage.getItem('nivel1')) || 0;
let nivel2 = parseInt(localStorage.getItem('nivel2')) || 0;
let nivel3 = parseInt(localStorage.getItem('nivel3')) || 0;

// Salvar pontuação do jogo //

// Função para salvar os pontos//

function salvar_pontos(valor, soma) {

    if (valor >= 1 && valor <= 3) {
        var valorRecuperado = parseInt(localStorage.getItem('nivel1')) || 0;
        var novoValor = valorRecuperado + soma;
        localStorage.setItem('nivel1', novoValor);
        console.log(localStorage.getItem('nivel1'));
    } else if (valor >= 4 && valor <= 6) {
        var valorRecuperado = parseInt(localStorage.getItem('nivel2')) || 0;
        var novoValor = valorRecuperado + soma;
        localStorage.setItem('nivel2', novoValor);
        console.log(localStorage.getItem('nivel2'));
    } else if (valor >= 7 && valor <= 9) {
        var valorRecuperado = parseInt(localStorage.getItem('nivel3')) || 0;
        var novoValor = valorRecuperado + soma;
        localStorage.setItem('nivel3', novoValor);
        console.log(localStorage.getItem('nivel3'));
    }
 
}

// Função para salvar os pontos//

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.continuous = true;
    recognition.lang = 'pt-BR';

    recognition.onstart = () => {
        console.log('Iniciou a captura de áudio.');
    };

    recognition.onend = () => {
        console.log('Encerrou a captura de áudio. Reiniciando...');
        recognition.start();
    };

    let i = 0;
    let palavra_encontrada = false;
    palavra_falar.textContent = palavrasArray[i];
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;

        palavra_falar.textContent = palavrasArray[i];

        if (transcript.toLowerCase().includes(palavrasArray[i].toLowerCase())) {
            mensagem_ao_jogador('efeito_acerto');
            qntd_estrelas++;
            estrelas.textContent = `${qntd_estrelas}/${estrelas_para_alcançar}`;
            console.log(qntd_estrelas);
        } else {
            qntd_vidas--;
            vidas.textContent = qntd_vidas;
            console.log(qntd_vidas);
            mensagem_ao_jogador('efeito_erro');
        }

        i++;

        if (qntd_vidas <= 0) {
            $(document).ready(function () {
                $('#derrota').modal('show');
                const nivel = document.getElementById('nivel');
                nivel.href = `/${valorEntreUltimaBarraEJogo}/jogo`;
            });
        }

        if (qntd_estrelas >= estrelas_para_alcançar) {
            salvar_pontos(valorEntreUltimaBarraEJogo,estrelas_para_alcançar);
            $(document).ready(function () {
                $('#vitoria').modal('show');
                const prox_nivel = document.getElementById('prox_nivel');
                const proximo_nivel = valorEntreUltimaBarraEJogo + 1;
                if(prox_nivel > 9){
                    $('#acabou_jogo').modal('show');
                } else {
                    prox_nivel.href = `/${proximo_nivel}/jogo`;
                }
            });
        }

        if (i < palavrasArray.length) {
            palavra_falar.textContent = palavrasArray[i];
        }

        if (i >= palavrasArray.length) {
            alert('parou');
        }
    };


    recognition.start();
} else {
    alert('Desculpe, seu navegador não suporta a API de Reconhecimento de Fala.');
}

