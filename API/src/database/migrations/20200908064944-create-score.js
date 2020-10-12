'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {

      return queryInterface.createTable('user_score', {

        id:{
           type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey:true,
        },
        point:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        created_at:{
            type:Sequelize.DATE,
            allowNull:false
        },
        updated_at:{
            type:Sequelize.DATE,
            allowNull:false
        }

    });

  },

  down: queryInterface => {

     return queryInterface.dropTable('user_score');

  }
};
