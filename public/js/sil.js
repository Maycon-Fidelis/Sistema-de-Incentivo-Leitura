// Função para fazer o som funcionar //
botao_som = document.getElementById('botao_som');
botao_som.addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
})
// Função para fazer o som funcionar //


// Função para fazer o som funciona na tela de jogo, pois não é possível usar o id em todos os itens de audio que tem //

//Derrota//
botao_som_derrota = document.getElementById('botao_som_derrota');
botao_som_derrota.addEventListener('click', function() {
    var fase_perdida = document.getElementById('fase_perdida');
    fase_perdida.play();
})
//Vitoria//
botao_som_vitoria = document.getElementById('botao_som_vitoria');
botao_som_vitoria.addEventListener('click', function() {
    var fase_vencida = document.getElementById('fase_vencida');
    fase_vencida.play();
})
//Zerou o jogo//
botao_som_acabou = document.getElementById('botao_som_acabou');
botao_som_acabou.addEventListener('click', function() {
    var botao_zerado = document.getElementById('botao_zerado');
    botao_zerado.play();
})

// Função para fazer o som funciona na tela de jogo, pois não é possível usar o id em todos os itens de audio que tem //