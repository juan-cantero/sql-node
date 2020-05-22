# Controllers

1. Create a folder called controllers and add controllers for our models, for instance if you have the model user
you should add the UserController. In the controller is the logic to interact with our model. 
 example :

 ```javascript
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const {name, email} = req.body;
        const user = await User.create({name, email}); // create build a model instance and save it to the database
        return res.json(user)
    }


}

 ```

 