const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//Create the `router` for the app, and export the `router` at the end of your file.

//view all 
router.get('/api/all', (req, res) => {
    burger.view(result => {
        res.json(result)
    })
})

//add

//update



module.exports = router;