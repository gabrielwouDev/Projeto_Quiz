
function gerarHtml(textoTag){
    let novaTag = document.createElement(textoTag)
    return novaTag
}

function gerarLinhas(dados){
    let tr = gerarHtml('tr')
    let td1 = gerarHtml('td')
    let td2 = gerarHtml('td')
    let td3 = gerarHtml('td')
    let td4 = gerarHtml('td')
    let td5 = gerarHtml('td')

    td1.textContent = dados.resposta1
    td2.textContent = dados.resposta2
    td3.textContent = dados.resposta3
    td4.textContent = dados.resposta4
    td5.textContent = dados.resposta5

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    return tr
}

export{ gerarLinhas }