const User = require('../models/User');
const {Op} = require('sequelize');

// encontrar todos los usuarios que tengan email de @email.com y que vivan en calle-rara

const findUserWithFilters = async(req, res) => {
    const users = await User.findAll({
        attributes:['email'],
        where: {
            email: {
                [Op.iLike] : '%@email.com'
            }
        },
        include: [
            {association:'addresses', where:{street: 'calle-rara'}}
        ]
    })

    if(!users) return res.code(404).json({error:"users not found"})

    return res.json(users);
}

module.exports = {findUserWithFilters};