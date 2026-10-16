import {conexao} from '../conexao.js'

async function deletarUsuario(codigo){
    
    const sql = `DELETE FROM tbUsuario WHERE idUsuario = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[codigo]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {deletarUsuario}