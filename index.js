import express from 'express'
import cors from 'cors'

import { inserirUsuario } from './src/dao/usuario/inserirUsuario.js'
import { buscarUsuario } from './src/dao/usuario/buscarUsuario.js'

const app = express()


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API do Pokéquiz está funcionando corretamente!' })
})




app.post('/InserirUsuario', async (req, res) => {
    let { nome, email, endereco, genero, estado, resposta1, resposta2, resposta3 , resposta4, resposta5, resultado } = req.body   
    let infos = [ nome, email, endereco, genero, estado, resposta1, resposta2, resposta3 , resposta4, resposta5, resultado ]
    let results = await inserirUsuario(infos)

    console.log(results)
    res.json(results)
})

app.get('/buscarUsuario', async (req,res)=>{
    try {
        const usuario = await buscarUsuario()
        res.json(usuario)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar Usuario', detalhes: erro.message })
    }
})

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000')
})