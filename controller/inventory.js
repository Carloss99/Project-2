const express = require('express')
const router = express.Router()


//Inventory model imported
const Inventory = require('../models/inventory')


//Hook Route
router.get('/Hook', async (req,res) => {
    const hooks = await Inventory.find({type:"Hook"})
    console.log(hooks)
    res.render('hook.ejs', {
        inventory: hooks
    })
})
//Handles route
router.get('/Handle', async (req,res) =>{
    const handles = await Inventory.find({type:"Handle"})
    console.log(handles)
    res.render('handles.ejs', {
        inventory: handles
    })
})

//Knobs route
router.get('/Knob', async (req,res) => {
    const knobs = await Inventory.find({type:'Knob'})
    console.log(knobs)
    res.render('knobs.ejs', {
        inventory: knobs
    })
})

//New route
router.get('/new', (req,res)=>{
    res.render('new.ejs')
})
//Show route
router.get('/:id', async (req,res) => {
    try{
    const found = await Inventory.findById(req.params.id)
    console.log(found)
    res.render('show.ejs', {
        accessory: found
    })
}catch(err){
    console.log(err)
}
})

//Edit route
router.get('/:id/edit', async (req,res) =>{
    const found = await Inventory.findById(req.params.id)
    res.render('edit.ejs', {
        accessory: found
    })
})

//create route
router.post('/', async(req,res) =>{
    const newItem = await Inventory.create(req.body)
    console.log(newItem)
    res.redirect('/')
})

//Update route
router.put('/:id', async (req,res) => {
    console.log(req.body)
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect('/inventory/'+ req.params.id)
})



//Delete route
router.delete('/:id', async (req,res) => {
    const item = await Inventory.findByIdAndDelete(req.params.id)
    console.log(item)
    res.redirect('/inventory')
})

module.exports = router