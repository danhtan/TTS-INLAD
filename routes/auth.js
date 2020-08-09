const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/register' , authController.register);

router.post('/view' , authController.view);
router.post('/update' , authController.update);
router.post('/xuli_update' , authController.xuli_update);

module.exports = router ;