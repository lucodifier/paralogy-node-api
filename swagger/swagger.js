export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Paralogy API',
    version: '1.0.0',
    description: 'Documentação da API usando Swagger',
  },
  servers: [
    {
      url: 'http: //localhost:3000',
      description: 'Servidor de Desenvolvimento',
    },
  ],
  paths: {
    '/api/users': {
      get: {
        summary: 'Lista todos os usuários',
        responses: {
          200: {
            description: 'Lista de usuários retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'integer',
                        description: 'ID do usuário',
                      },
                      name: {
                        type: 'string',
                        description: 'Nome do usuário',
                      },
                      email: {
                        type: 'string',
                        description: 'Email do usuário',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Cria um novo usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'Nome do usuário',
                    example: 'João da Silva',
                  },
                  email: {
                    type: 'string',
                    description: 'Email do usuário',
                    example: 'joao.silva@example.com',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Usuário criado com sucesso',
          },
        },
      },
    },
  },
};
