const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//Create the `router` for the app, and export the `router` at the end of your file.

//view all 
router.get('/', (req, res) => {
    burger.view(result => {
        res.render('index', {burger: result})
    })
});

//add
router.post('/api/new', (req, res) => {
    burger.add(req.body, result => {
        res.json({id: result.insertId})
    });
});

//update
router.put('/api/change/:id', (req,res) => {
    burger.edit(req.body, req.params.id, result => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});



module.exports = router;