import {conexao} from '../conexao.js'

async function buscarDados(){
  const sql = `
  SELECT Usuario.idUsuario , Respostas.resposta1, Respostas.resposta2, Respostas.resposta3, Respostas.resposta4, Respostas.resposta5 FROM tbRespostas AS Respostas
    INNER JOIN tbUsuario AS Usuario
      ON respostas.idUsuario = Usuario.idUsuario;
 `;
  
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