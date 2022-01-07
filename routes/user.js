var express = require('express');
var router = express.Router();

const userController = require("../Controllers/user");

router.get('/test', userController.Test);
router.post('/login', userController.Login);


module.exports = router;