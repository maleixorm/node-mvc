const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'php', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log("Conectamos ao banco de dados!");
} catch (error) {
    console.log(`Não foi possível conectar ao banco de dados: ${error}`);
}

module.exports = sequelize