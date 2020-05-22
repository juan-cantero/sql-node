# create a database and migrate with sequelize

1. create a config archive under ./config with the info. example:
```javascript 
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'juan',
    password:'mipassword',
    database:'sqlnode',
    define: {
        timestamps: true,// created_at,updated_at
        underscored:true // snakecase
    }
}; 
```

2. create an index.js under /database to initialize sequelize. ex: 
```javascript
    const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;
```

3. create an archive called .sequelizerc in order sequelize find the config path. ex:
```javascript 
const path = require('path');

module.exports = {
    config: path.resolve(__dirname,'src','config','database.js'),
    'migrations-path': path.resolve(__dirname,'src','database','migrations')
}
```

4. run the command ***npx sequelize db:create*** to create the database.

5. create a migration directory under database and run the command ***npx sequelize migration:create --name=create-users*** to create a table. (the name is like the name we use in commit on git)

6. modify the archive created by the command migration:create. ex:

```javascript
    module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', {
         id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
         },
         name: {
           type: Sequelize.STRING,
           allowNull: false
         },
         email: {
           type: Sequelize.STRING,
           allowNull: false
           
         },
         created_at: {
           type: Sequelize.DATE,
           allowNull: false
         },
         updated_at: {
           type: Sequelize.DATE,
           allowNull: false
         }

        
        });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');
  }
};

```
7. run the command ***npx sequelize db:migrate*** to migrate the table to the database.

8. if something went wrong or it is necessary to change a field in the table you can use the command ***npx db:migrate:undo***, unless the database is already on production, in that case see the next point.

9. create a new migration to update the table, for instance if I want to add a column age:
***npx sequelize migration:create --name=add-age-field-to-users***
and modify the archive:

```javascript
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



```