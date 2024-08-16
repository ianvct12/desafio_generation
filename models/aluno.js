'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    nota_primeiro_semestre: DataTypes.DECIMAL,
    nota_segundo_semestre: DataTypes.DECIMAL,
    nome_professor: DataTypes.STRING,
    numero_sala: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};