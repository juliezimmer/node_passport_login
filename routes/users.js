// using Express router
const express= require('express');
// establish an express router
const router = express.Router();

// Login Page
router.get('/login', (req, res) => res.send("Login"));

// register Page
router.get('/register', (req, res) => res.send("Register"));
 
module.exports = router;