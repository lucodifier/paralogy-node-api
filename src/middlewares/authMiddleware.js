import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

// Chave secreta usada para assinar e verificar o token
const JWT_SECRET = process.env.JWT_SECRET;

export function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  // Extrair o token do cabeçalho
  const token = authHeader.split(' ')[1];

  try {
    // Verificar e decodificar o token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Adicionar os dados do usuário à requisição
    req.user = decoded;

    next(); // Prosseguir para o próximo middleware ou controller
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido ou expirado' });
  }
}
