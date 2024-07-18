<div align="center">
  <h1>Sistema de Incentivo à Leitura</h1>
</div>

## Visão Geral
Este projeto foi desenvolvido como parte de uma avaliação na disciplina de Engenharia de Software, com o objetivo de utilizar conceitos de gamificação para incentivar a leitura. O software consiste em um jogo que gera palavras de forma aleatória para serem lidas, com feedback ao usuário sobre acertos e erros.

## Objetivos
O projeto visa incentivar a leitura através de conceitos de gamificação, incluindo feedback imediato ao usuário quando erra ou acerta, sistema de vidas e acertos, liberação de fases por nível, e um fator replay devido à geração aleatória de palavras.

## Tecnologias Usadas
- Handlebars
- Bootstrap
- Node.js
- API do ChatGPT

## Demonstração
<div align="center">
<img src="https://github.com/user-attachments/assets/b0efc715-c61a-4219-ae28-b737a0296ec3" width="35%">
</div>

## Visualizar Projeto
Você pode visualizar o projeto online [clicando aqui](https://sistema-de-incentivo-leitura-production.up.railway.app/). (Obs: Usar navegador compatível, recomendado o uso do Google Chrome) 

## Como Executar o Projeto Localmente

### Requisitos
Certifique-se de ter o Node.js instalado.

### Passos
1. Clone o repositório:
    ```bash
    git clone https://github.com/Maycon-Fidelis/Sistema-de-Incentivo-Leitura
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Sistema-de-Incentivo-a-Leitura
    ```

3. Instale as dependências do back-end e inicie-o:
    ```bash
    npm install
    npm start
    ```

    ## Observações
- Verifique se a porta 3000 está livre. Caso ela já esteja sendo usada, você pode modificar isso no arquivo `index.js`.
- Adicionar a chave API do chatgpt no arquivo `models/api_palavras.js`
