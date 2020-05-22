## Models 

### one to many

1. Create a folder called models and add a file with the name of the table with pascalcase and in singular for instance:
table: users model: User.js
create your model, ex:
```javascript
const {Model,DataTypes} = require('sequelize');

class User extends Model {
   static init(sequilize) {
       super.init({
           name:DataTypes.STRING,
           email:DataTypes.STRING
       },{
           sequelize
       })
   } 
    static associate(models) {
       this.hasMany(models.Address, {foreignKey:'user_id', as: "addresses"});
   };
    

}

module.exports = User;

class Address extends Model {
   static init(sequelize) {
       super.init({
           zipcode:DataTypes.STRING,
           street:DataTypes.STRING,
           number:DataTypes.INTEGER
       },{
           sequelize
       })
   } 
   // I'm passing the name of the folder
   static associate(models) {
       this.belongsTo(models.User,{foreignKey:'user_id', as :'user'});
   }

}


```

2. Once you have your model you can initialize your database, in the index.js under your database folder you add :
```javascript
    Address.init(connection);
User.associate(connection.models);
Address.associate(connection.models);
```

## Many to many 

To define a relationship many to many we need to tell our models they belongs to many :
for instance in this case we are associating the model Tech with the model users

```javascript
  static associate(models) {
       this.belongsToMany(models.User,{foreignKey:'tech_id', through :'user_techs', as: 'users'});
   }

     
   static associate(models) {
       this.hasMany(models.Address, {foreignKey:'user_id', as: "addresses"});
       this.belongsToMany(models.Tech, {foreignKey:'user_id', through:'user_techs', as:'techs'});
   }

```
