import { getDbConnection } from '../db/dbConfig.js';

export async function getAllUsers() {
  const pool = await getDbConnection();
  const result = await pool.request().query(`SELECT CODIGO, EMAIL, DDI, PHONE, IS_TOKEN_CHEKED, DT_CREATE, IS_ATIVO, IS_BLOQUEADO,
     IS_FORCE_UPDATE_SENHA, CODIGO_PLATAFORMA, DT_UPDATE, 
     IS_DELETED, NOME 
     FROM TB_USUARIO_WEB`);
  return result.recordset;
}