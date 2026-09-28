import {conexao} from '../conexao.js'

async function inserirRespostas(infos){
    const data = [infos]
    const sql = `INSERT INTO tbRespostas (resposta1, resposta2, resposta3 , resposta4, resposta5, idUsuario) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {inserirRespostas}