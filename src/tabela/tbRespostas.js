import { buscarDados } from "./buscarDados.js"
import { gerarLinhas } from "./gerarLinha.js"

//Tabela Respostas
let Respostas = await buscarDados('http://localhost:3000/buscarRespostas')
let tbRespostas = document.querySelector('#tbRespostas')
for (let i = 0; i < Respostas.length; i++) {
    let l = gerarLinhas(Respostas[i])
    tbRespostas.append(l)
}