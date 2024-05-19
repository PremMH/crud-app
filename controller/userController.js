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

const getUsers = async (req, res) => {
    try {
        const item = await User.find();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getUser = async (req, res) => {

    const {id} = req.params;

    try {
        const item = await User.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateUser = async (req, res) => {

    const { id } = req.params;
    const updates = req.body;
  
    try {
      const item = await User.findByIdAndUpdate(id, updates);
  
      if (!item) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const updatedItem = await User.findById(id);
      res.status(200).json({message: 'User updated sucessfully', data: updatedItem})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}


const deleteUser = async (req, res) => {

    const { id } = req.params;
    const updates = req.body;
  
    try {
      const item = await User.findByIdAndDelete(id);
  
      if (!item) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const updatedItem = await User.findById(id);
      res.status(200).json({message: 'User deleted sucessfully', data: updatedItem})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}


module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}