// @ts-nocheck
const Tech = require('../models/Tech');
const User = require('../models/User');


const listTechByUser = async (req, res) => {
    const {
        user_id
    } = req.params;
    const user = await User.findByPk(user_id, {
        include: {
            association: 'techs',
            attributes: ['name'],
            
            through: {
                attributes: []
            }
        }
    })

    if (!user) return res.code(404).json({
        error: 'user not found'
    });

    return res.json(user.techs);
}

const store = async (req, res) => {
    const {
        user_id
    } = req.params;
    const {
        name
    } = req.body;
    const user = await User.findByPk(user_id);

    if (!user) return res.code(404).json({
        error: 'user not found'
    });

    const [tech] = await Tech.findOrCreate({
        where: name
    });

    await User.addTech(tech);

    return res.json(tech);
}

const deleteTechnology = async (req, res) => {
    const {
        user_id
    } = req.params;
    const {
        name
    } = req.body;
    const user = await User.findByPk(user_id);

    if (!user) return res.code(404).json({
        error: 'user not found'
    });

    const tech = Tech.findOne({
        where: {
            name
        }
    });

    await User.removeTech(tech);

    return res.json();


}

module.exports = {
    store,
    deleteTechnology,
    listTechByUser
};