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

module.exports = router