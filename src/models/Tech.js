// @ts-nocheck
const {Model,DataTypes} = require('sequelize');

class Tech extends Model {
   static init(sequelize) {
       super.init({
           name:DataTypes.STRING
       },{
           sequelize,
           tableName:'techs'
       })
   } 
   // I'm passing the name of the folder
   static associate(models) {
       this.belongsToMany(models.User,{foreignKey:'tech_id', through :'user_techs', as: 'users'});
   }

}

module.exports = Tech;