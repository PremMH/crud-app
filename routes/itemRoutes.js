const express  = require('express');
const router  = express.Router();
const {getItem, getItems, addItem, updateItem, deleteItem} = require('../controller/itemController')

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', addItem);

router.patch('/:id', updateItem);

router.patch('/:id', deleteItem);



module.exports = router;