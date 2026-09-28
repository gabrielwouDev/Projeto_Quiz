import {conexao} from '../conexao.js'

async function inserirUsuario(infos){
    const data = [infos]
    const sql = `INSERT INTO tbUsuario (nome, email, endereco, genero, estado, resposta1, resposta2, resposta3, resposta4, resposta5, resultado) VALUES ?`
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

export {inserirUsuario}