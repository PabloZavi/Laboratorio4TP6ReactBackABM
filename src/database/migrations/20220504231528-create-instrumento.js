'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('instrumentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      instrumento: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.STRING
      },
      costoEnvio: {
        type: Sequelize.STRING
      },
      cantidadVendida: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('instrumentos');
  }
};