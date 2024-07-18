const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const Gerar_palavras = require('models/api_palavras');
const PORT = process.env.PORT || 3000;

//CONFIGURAÇÃO DO HANDLEBARS
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
})); app.set('view engine', 'hbs');

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({extended:false}));

// CONFIGURAÇÕES DAS SESSIONS

async function Gerar_palavra_model(numero, res) {
    try {
        const list_palavras = await Gerar_palavras(numero);
        console.log(list_palavras);
        res.render('jogo', { list_palavras });
    } catch (erro) {
        console.error('Erro:', erro.message);
        res.status(500).send('Erro interno do servidor');
    }
}

app.get('/', (req, res) => {
    res.render('menu');
})

app.get('/dificuldade', (req, res) => {
    res.render('dificuldade');
})

app.get('/dificuldade/:nivel', (req, res) => {
    const nivel = req.params.nivel;

    let dados = {
        dificuldade: '',
        audio: '',
        nivel: '',
        fase1: '',
        fase2: '',
        fase3: '',
    };

    if (nivel === '1') {
        dados.dificuldade = 'fácil';
        dados.audio = 'audio/audio_facil.mp3';
        dados.nivel = '1';
        dados.fase1 = '1';
        dados.fase2 = '2';
        dados.fase3 = '3';
    }

    if (nivel === '2') {
        dados.dificuldade = 'médio';
        dados.audio = 'audio/audio_medio.mp3';
        dados.nivel = '2';
        dados.fase1 = '4';
        dados.fase2 = '5';
        dados.fase3 = '6';
    }

    if (nivel === '3') {
        dados.dificuldade = 'avançado';
        dados.audio = 'audio/audio_avancado.mp3';
        dados.nivel = '3';
        dados.fase1 = '7';
        dados.fase2 = '8';
        dados.fase3 = '9';
    }

    res.render('fases', dados);
});

app.get('/:fases/jogo', async (req, res) => {
    const nivel = req.params.nivel;
    const fases = req.params.fases;

    try {
        if (fases === '1') {
            Gerar_palavra_model(1, res);
        } if (fases === '2') {
            Gerar_palavra_model(2, res);
        } if (fases === '3') {
            Gerar_palavra_model(3, res);
        } if (fases === '4') {
            Gerar_palavra_model(4, res);
        } if (fases === '5') {
            Gerar_palavra_model(5, res);
        } if (fases === '6') {
            Gerar_palavra_model(6, res);
        } if (fases === '7') {
            Gerar_palavra_model(7, res);
        } if (fases === '8') {
            Gerar_palavra_model(8, res);
        } if (fases === '9') {
            Gerar_palavra_model(3, res);
        } 

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

// app.post('/cad',(req,res)=>{
//       return res.render('menu',{NavActiveCad:true, MsgSucess:true});
// })

// app.post('/update',(req,res)=>{
//         return res.redirect('/users');
// })

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
})