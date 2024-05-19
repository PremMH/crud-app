const Item = require('../models/items')



const getItems = async (req, res) => {
    try {
        const item = await Item.find()
        res.status(200).json({
            message: 'Item retrieved successfully',
            data: item
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getItem = async (req, res) => {
    const { id } = req.params;
    try {
      const item = await Item.findById(id);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}


const addItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const updateItem = async (req, res) => {

    const { id } = req.params;
    const updates = req.body;
  
    try {
      const item = await Item.findByIdAndUpdate(id, updates);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      const updatedItem = await Item.findById(id);
      res.status(200).json({message: 'Item updated sucessfully', data: updatedItem})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
}



const deleteItem = async (req, res) => {
    // get route for /api/items/:id
    const { id } = req.params;
  
    try {
      const item = await Item.findByIdAndDelete(id);
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  
  
}


module.exports = {
    getItem,
    getItems,
    addItem,
    updateItem,
    deleteItem
}