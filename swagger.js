const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');

const app = express();

// Configuração das opções do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Alunos',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de alunos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Caminho para os arquivos com as anotações da API
  apis: ['./index.js'], // Altere para o caminho dos arquivos com as anotações
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Configuração do Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
