import express from 'express'
import cors from 'cors'

import { inserirUsuario } from './src/dao/usuario/inserirUsuario.js'
import { buscarDados } from './src/dao/usuario/buscarDados.js'
import { inserirRespostas } from './src/dao/usuario/inserirRespostas.js'

const app = express()


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API do Pokéquiz está funcionando corretamente!' })
})




app.post('/InserirUsuario', async (req, res) => {
    let { nome, email, endereco, genero, estado, resultado } = req.body   
    let infos = [ nome, email, endereco, genero, estado, resultado ]
    let results = await inserirUsuario(infos)

    console.log(results)
    res.json(results)
})

app.post('/InserirRespostas', async (req, res) => {
    let {resposta1, resposta2, resposta3 , resposta4, resposta5, idUsuario} = req.body   
    let infos = [resposta1, resposta2, resposta3 , resposta4, resposta5, idUsuario]
    let results = await inserirRespostas(infos)

    console.log(results)
    res.json(results)
})

app.get('/buscarDados', async (req,res)=>{
    try {
        const dados = await buscarDados()
        res.json(dados)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar Usuarios', detalhes: erro.message })
    }
})

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000')
})