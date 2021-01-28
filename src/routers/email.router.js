const router = require('express').Router();

const emailController = require('../controllers/email.controller');


router.get('/', emailController.email);
router.post('/send-email' , emailController.emailAdd);


module.exports = router;