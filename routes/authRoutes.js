const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();



router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");  
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.send('API is running...');
  });

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
