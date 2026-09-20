import express from 'express'
import cors from 'cors'

import { inserirUsuario } from './dao/usuario/inserirUsuario.js'

const app = express()


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API do Pokéquiz está funcionando corretamente!' })
})




app.post('/InserirUsuario', async (req, res) => {
    let { nome, email , endereco , genero , estado , resultado } = req.body   
    let infos = [nome, email , endereco , genero , estado , resultado ]
    let results = await inserirUsuario(infos)

    console.log(results)
    res.json(results)
})

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000')
})