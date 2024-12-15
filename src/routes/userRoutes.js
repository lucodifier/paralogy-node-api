import express from 'express';
import { getUsers } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do usuário
 *                   name:
 *                     type: string
 *                     description: Nome do usuário
 *                   email:
 *                     type: string
 *                     description: Email do usuário
 */
router.get('/', authMiddleware, getUsers);



export default router;
