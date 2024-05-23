const express = require('express')
const router = express.Router();
const {addRoute, getRoute} = require('../controller/busRouteController')

const {addExpenditure, getExpenditure, getExpenditureById} = require('../controller/expenditureContr')



router.post('/addRoute', addRoute);

router.get('/getRoute', getRoute);

router.post('/addExpenditure', addExpenditure);

router.get('/getExpenditure', getExpenditure);

router.get('/getExpenditure/:id', getExpenditureById);


module.exports = router;