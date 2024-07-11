'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },  
      isFeatured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      productImage: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      shortDescription: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
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
    await queryInterface.dropTable('projet');
  }
};