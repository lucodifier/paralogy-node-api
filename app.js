import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import chalk from 'chalk';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './src/routes/userRoutes.js';
import { swaggerSpecs } from './swagger/swaggerConfig.js'; 


const app = express();

app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);

// Configuração do Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Middleware para erro 404
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(chalk.blue('🌟 Paralogy API está rodando! 🌟'));
  console.log(chalk.yellow(`📅 Inicio: ${new Date().toLocaleString()}`));
  console.log(chalk.green(`🚀 Servidor rodando na porta ${PORT}`));
  console.log(chalk.cyan(`📚 Documentação disponível em http://localhost:${PORT}/swagger`));
  console.log(chalk.magenta('💡 Dica do dev: Use Ctrl+C para parar o servidor.'));
});
