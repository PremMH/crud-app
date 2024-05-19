const express = require('express');
const router = express.Router();
const {addUser, getUser, updateUser, deleteUser, getUsers} = require('../controller/userController')



router.post('/', addUser);

router.get('/:id', getUser);

router.get('/', getUsers);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);




module.exports = router