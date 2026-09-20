import {conexao} from '../conexão.js'

async function inserirUsuario(infos){
    const data = [infos]
    const sql = `INSERT INTO tbUsuario (nome, email, endereco, genero, estado, resultado) VALUES ?`
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