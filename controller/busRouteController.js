const Route = require('../models/routes');

const Crew  = require('../models/crew')

const addRoute = async (req, res) => {
    try {

        // Extract clientauth header
        const clientAuthId = req.headers.clientauth;
        
        if (!clientAuthId) {
            return res.status(400).json({ message: 'ClientAuth header is required' });
        }

        // Find the user by the provided ID in the clientauth header
        const crew = await Crew.findById(clientAuthId);
        req.body.busNo = crew.busNo
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