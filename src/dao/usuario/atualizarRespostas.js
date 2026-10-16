import {conexao} from '../conexao.js'

async function atualizarRespostas(infos){
    const data = [infos]
    const sql = `UPDATE tbUsuario SET resposta1 = ?, resposta2 = ?, resposta3 = ?, resposta4 = ?, resposta5 = ?, resultado = ? WHERE idUsuario = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,infos);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {atualizarRespostas}