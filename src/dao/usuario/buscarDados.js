import {conexao} from '../conexao.js'

async function buscarDados(){
  const sql = 'SELECT idUsuario, resposta1, resposta2, resposta3, resposta4, resposta5, resultado FROM tbUsuario';
  
  const conn = await conexao()
  try {
      // Executar a consulta
      const [rows, fields] = await conn.query(sql);
      await conn.end()
      return rows
    } catch (err) {
      return err.message
    }
}

export{ buscarDados }