import express from 'express'
import cors from 'cors'

import { inserirUsuario } from './src/dao/usuario/inserirUsuario.js'
import { buscarDados } from './src/dao/usuario/buscarDados.js'
import { atualizarRespostas } from './src/dao/usuario/atualizarRespostas.js'
import { deletarUsuario } from './src/dao/usuario/deletarUsuario.js'

const app = express()


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API do Pokéquiz está funcionando corretamente!' })
})


app.post('/InserirUsuario', async (req, res) => {
    let { nome, email, endereco, genero, estado, resposta1, resposta2, resposta3, resposta4, resposta5, resultado } = req.body   
    let infos = [ nome, email, endereco, genero, estado, resposta1, resposta2, resposta3, resposta4, resposta5, resultado ]
    let results = await inserirUsuario(infos)

    res.json(results)
})


app.get('/buscarRespostas', async (req,res)=>{
    try {
        const dados = await buscarDados()
        res.json(dados)
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar Respostas', detalhes: erro.message })
    }
})

app.put('/atualizarRespostas', async (req,res)=> {
    let { resposta1, resposta2, resposta3, resposta4, resposta5, resultado, idUsuario } = req.body   
    let infos = [  resposta1, resposta2, resposta3, resposta4, resposta5, resultado, idUsuario ]
    let results = await atualizarRespostas(infos)

    if (results.affectedRows === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado para atualização.' })
    }

    res.json({ mensagem: 'Respostas atualizadas com sucesso!' })
})

app.delete('/deletarUsuario', async (req,res)=>{
    let {idUsuario} = req.body
    let results = await deletarUsuario(idUsuario)

    if (results.affectedRows === 0) {
        return res.status(404).json({ erro: 'Usuário não encontrado para exclusão.' })
    }

    res.json({ mensagem: 'Usuário excluído com sucesso!.' })

})



app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000')
})