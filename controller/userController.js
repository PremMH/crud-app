const User = require('../models/users')


const addUser = async (req, res) => {
    try {
        const item = await User.create(req.body);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



module.exports = {
    addUser
}