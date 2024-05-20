const Invoice = require('../models/invoices');
const User = require('../models/users');

const addExpenditure = async (req, res) => {
    try {
        // Extract clientauth header
        const clientAuthId = req.headers.clientauth;
        
        if (!clientAuthId) {
            return res.status(400).json({ message: 'ClientAuth header is required' });
        }

        // Find the user by the provided ID in the clientauth header
        const user = await User.findById(clientAuthId);

        console.log("user details", user)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the user's name to the request body
        req.body.name = user.name;
        console.log('the req bvody', req.body   )

        // Create the new invoice
        const item = await Invoice.create(req.body);

        // Send the response
        res.status(200).json({ message: "Expenditure added successfully", data: item });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getExpenditure = async (req, res) => {
    try {
        const item = await Invoice.find()
        res.status(200).json({
            message: 'Invoices retrieved successfully',
            data: item
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getExpenditureById = async (req, res) => {



    try {
    const {id} = req.params;
        const item = await Invoice.findById(id)
        res.status(200).json({
            message: 'Invoices retrieved successfully for this user',
            data: item
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    addExpenditure,
    getExpenditure,
    getExpenditureById
}
