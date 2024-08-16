const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
app.use(bodyParser.json());

// Definição das rotas aqui

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
const Aluno = db.Aluno;

// Rota para listar todos os alunos
app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

// Rota para criar um novo aluno
app.post('/alunos', async (req, res) => {
  const novoAluno = await Aluno.create(req.body);
  res.json(novoAluno);
});

// Rota para obter um aluno específico
app.get('/aluno/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.json(aluno);
});

// Rota para atualizar um aluno
app.put('/aluno/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (aluno) {
    await aluno.update(req.body);
    res.json(aluno);
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

// Rota para deletar um aluno
app.delete('/aluno/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (aluno) {
    await aluno.destroy();
    res.send('Aluno deletado com sucesso');
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});
