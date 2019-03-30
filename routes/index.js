// using Express router
const express= require('express');
// establish an express router
const router = express.Router();

// create GET request
router.get('/', (req, res) => res.send("Welcome"));
 
module.exports = router;