const router = require('express').Router() 
const customerController = require('../controllers/customerController')

router.get('/customers', customerController.getCustomer)

module.exports = router