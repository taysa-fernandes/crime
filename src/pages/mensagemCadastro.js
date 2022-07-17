const Sequelize = require('sequelize');
const db = require('./db');

const MsgCadastro = db.define('msg_contato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar a tabela no BD
MsgCadastro.sync();

//Verificar se há alguma diferença na tabela, realiza a alteração
//MsgCadastro.sync({ alter: true });

//Primeiro apaga a TB, em seguida cria TB
//MsgCadastro.sync({ force: true })

module.exports = MsgCadastro;