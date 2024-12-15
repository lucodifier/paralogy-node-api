import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Paralogy API',
      version: '1.0.0',
      description: 'Documentação da Paralogy API com autenticação',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para os arquivos onde estão documentadas as rotas
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
