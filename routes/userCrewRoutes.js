const express = require('express');
const router = express.Router();
const {registerUser, getUser, updateUser, deleteUser, getUsers, registerCrew,  updateCrew, getCrew, getCrewById} = require('../controller/userController')
const auth = require('../middleware/auth')
const isAdmin = require('../middleware/role')


router.post('/registerUser', registerUser);

router.get('/:id',  getUser);

router.get('/', auth,  getUsers);

router.patch('/updateUser/:id', auth,  updateUser);

router.delete('/deleteUser/:id', auth,  deleteUser);


// crew routes
router.post('/registerCrew', isAdmin, auth,  registerCrew);

router.post('/updateCrew/:id', auth,  updateCrew);

router.get('/crew/:id', auth,  getCrewById);

router.get('/crew', auth,  getCrew);






module.exports = router