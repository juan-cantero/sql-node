const Address = require('../models/Address');
const User = require('../models/User');

const store = async (req, res) =>  {
    const {user_id} = req.params
    const {zipcode,street, number} = await req.body;
    const user = await User.findByPk(user_id);

    if(!user) return res.status(400).json({error:'User not found'});

    const address = await Address.create({zipcode, street, number,user_id});
    return res.json(address);

}

const findAllAddressesPerUser  = async (req, res ) => {
    const {user_id} = req.params;
    const user = await User.findByPk(user_id,{
        include:[{association:'addresses'}]
    })
    // @ts-ignore
    return res.json(user.addresses);
}

module.exports = {store,findAllAddressesPerUser};