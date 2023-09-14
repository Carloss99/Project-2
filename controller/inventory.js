const express = require('express')
const router = express.Router()

//Inventory model imported
const Inventory = require('../models/inventory')

//Index Route
router.get('/', async (req,res) => {
    const inventoryfound = await Inventory.find({})
    console.log(inventoryfound)
    res.render('index.ejs', {
        inventory: inventoryfound
    })
})

//Show route
router.get('/:id', async(req,res) => {
    const item = await Inventory.findById(req.params.id)
    console.log(item)
    res.send('hello world')
})

module.exports = router