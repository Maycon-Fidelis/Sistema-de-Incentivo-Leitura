let nivel1 = parseInt(localStorage.getItem('nivel1')) || 0;
let nivel2 = parseInt(localStorage.getItem('nivel2')) || 0;
let nivel3 = parseInt(localStorage.getItem('nivel3')) || 0;

console.log('Nível 1:', nivel1);
console.log('Nível 2:', nivel2);
console.log('Nível 3:', nivel3);

const numero_estrelas = document.getElementById('numero_estrelas');

// Função para pegar o valor da URL //
var url = window.location.href;

var regex = /\/dificuldade\/(\d+)/;

var pegar_valor_url = url.match(regex);

var valorEntreUltimaBarraEJogo = parseInt(pegar_valor_url[1]); 
console.log(valorEntreUltimaBarraEJogo);

// Função para pegar o valor da URL //

// Pegando as estrelas //


function liberar_fases(fase){
    
    let nivel_2 = document.getElementById('nivel_2');
    let bloqueio2 = document.getElementById('bloqueio2');
    let nivel_3 = document.getElementById('nivel_3');
    let bloqueio3 = document.getElementById('bloqueio3');

    if(fase === 1){
        numero_estrelas.textContent = nivel1;
        if(nivel1 <= 10) {
            nivel_2.style.opacity = '0.75';
            nivel_2.href = 'javascript:void9(0)';
            bloqueio2.style.display = 'block';
        }
        if(nivel1 <= 25) {
            nivel_3.style.opacity = '0.75';            
            nivel_3.href = 'javascript:void9(0)';
            bloqueio3.style.display = 'block';
        }
    } else if(fase === 2){
        numero_estrelas.textContent = nivel2;
        if(nivel2 <= 10) {
            nivel_2.style.opacity = '0.75';
            nivel_2.href = 'javascript:void9(0)';
            bloqueio2.style.display = 'block';
        }
        if(nivel2 <= 25) {
            nivel_3.style.opacity = '0.75';            
            nivel_3.href = 'javascript:void9(0)';
            bloqueio3.style.display = 'block';
        }
    } else if(fase === 3){
        numero_estrelas.textContent = nivel3;
        if(nivel3 <= 10) {
            nivel_2.style.opacity = '0.75';
            nivel_2.href = 'javascript:void9(0)';
            bloqueio2.style.display = 'block';
        }
        if(nivel3 <= 25) {
            nivel_3.style.opacity = '0.75';            
            nivel_3.href = 'javascript:void9(0)';
            bloqueio3.style.display = 'block';
        }
    }
}

liberar_fases(valorEntreUltimaBarraEJogo);

// Pegando as estrelas //