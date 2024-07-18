const axios = require('axios');

const apiKey = process.env.API_KEY; // Mudar para sua API

const apiUrl = 'https://api.openai.com/v1/chat/completions'; 

async function EnviarPergunta(pergunta) {
    try {
        const resposta = await axios.post(
            apiUrl,
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'system', content: 'Você é um assistente virtual.' }, { role: 'user', content: pergunta }],
            },
            {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
            }
        );

        const respostaDoModelo = resposta.data.choices[0].message.content;
        const listaDePalavras = respostaDoModelo.split('\n');
        const listaSemNumeros = listaDePalavras.map(palavra => palavra.replace(/[0-9.]/g, ''));
        
        return listaSemNumeros;        
    } catch (error) {
        console.error('Erro ao enviar solicitação: ', error.message);
        return [];
    }
}

async function Gerar_palavras(valor) {

    let prompt = '';    

    switch (valor){
        case 1:
            prompt = 'Me retorne uma lista de 20 palavras que sejam palavras fáceis para quem está aprendendo a ler logo sendo uma palavra curta algo em torno de duas silabas, que não possua ç ou acentuação. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
        
        case 2: 
            prompt = 'Me retorne uma lista de 25 palavras que sejam palavras fáceis para quem está aprendendo a ler logo sendo uma palavra media algo em torno de três silabas, que não possua ç ou acentuação. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
    
        case 3:
            prompt = 'Me retorne uma lista de 30 palavras que sejam palavras medias para quem está aprendendo a ler logo sendo uma palavra longa algo em torno de três a quatro silabas, que não possua ç ou acentuação. Porfavor retorne somente as palavras, sem nenhum texto a mais.';
        break;
    
        case 4:
            prompt = 'Me retorne uma lista de 20 palavras que sejam palavras medias para quem está aprendendo a ler podendo ser uma palavra longa, que na lista não contenha palavras acentuadas, com o uso de ç que tenham ditongo. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
    
        case 5:
            prompt = 'Me retorne uma lista de 25 frases curtas que sejam frases medias para quem está aprendendo a ler podendo ser uma frase media algo em torno de duas palavras. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
    
        case 6:
            prompt ='Me retorne uma lista de 30 frases curtas que sejam frases medias para quem está aprendendo a ler podendo ser uma frase media algo em torno de três palavras. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
    
        case 7:
            prompt = 'Me retorne uma lista de 20 palavras longas que sejam palavras complexas para quem está aprendendo a ler. Por favor retorne somente as palavras, sem nenhum texto a mais.'
        break;
        
        case 8:
            prompt ='Me retorne uma lista de 25 frases avançadas para quem está aprendendo a ler um frase que tenha quatro palavras. Por favor retorne somente as palavras, sem nenhum texto a mais.'
        break;

        case 9:
            prompt ='Me retorne uma lista de 30 frases avançadas para quem está aprendendo a ler um frase que tenha cinco ou mais palavras. Por favor retorne somente as palavras, sem nenhum texto a mais.';
        break;
        
    } 

    try {
        const list_palavras = await EnviarPergunta(prompt);
        return list_palavras;
    } catch (error) {
        console.error('Erro ao gerar palavras: ',  error.message);
        return [];
    }

}

module.exports = Gerar_palavras;
