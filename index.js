import express from 'express'

import { inserirUsuario } from './dao/usuario/inserirUsuario.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API do Pokéquiz está funcionando corretamente!' })
})




app.post('/InserirUsuario', async (req, res) => {

    let {} = req.body   
    let infos = [codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco ]
    let results = await incluirUsuario(infos)

    console.log(results)
    res.json(results)
})

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000')
})