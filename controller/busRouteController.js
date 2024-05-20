const Route = require('../models/routes');

const addRoute = async (req, res) => {
    try {
        const item = await Route.create(req.body);
        res.status(200).json({message: 'Route added successfully', data: item})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getRoute = async (req, res) => {
    try {
        const item = await Route.find();
        res.status(200).json({message: 'Routes retieved successfulyy', data: item});
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    addRoute,
    getRoute
}