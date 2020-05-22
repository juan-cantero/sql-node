'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // since it is just one promise I don't need to use await
    // i can just return the promise
    return queryInterface.addColumn(
      'users',
      'age',{
      type: Sequelize.INTEGER
      }
    )
   
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.removeColumn(
      'users',
      'age'
    )
  }
};
