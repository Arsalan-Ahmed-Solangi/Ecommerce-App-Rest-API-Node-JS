const express = require('express');
const { register } = require('../controllers/authController');
const router = express.Router();


//****RegisterAPI*****//
router.post("/register",register)

module.exports = router;