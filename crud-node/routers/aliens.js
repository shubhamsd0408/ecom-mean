const express = require('express');

const router = express.Router();
const Alien = require('../models/alien');
// const User = require('../models/user');

const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// Get All data
router.get('/', async (req,res)=>{
    try{    
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send('Error', + err)
    }
})
// Get data by id
router.get('/:id', async (req,res)=>{
    try{
        const aliens = await Alien.findById(req.params.id);
        res.json(aliens);
    }catch(err){
        res.send('Error', + err)
    }
})

// Post data
router.post('/', async(req,res)=>{
    const alien = new Alien({
        image: req.body.image,
        p_name: req.body.p_name,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
    })
    try{
       const a1 = await alien.save();
       res.json(a1);
    }catch(err){
        res.send('Error');
    }
})

// Update dta

router.put('/:id',async(req,res)=>{
    try{
        const objest=req.body

        const aliens = await Alien.findByIdAndUpdate({_id:req.params.id},objest);
        const resi = await Alien.findById(req.params.id)
         res.json(resi);
    }catch{
        res.send('Error');
    }
})

// Delete data
router.delete("/del/:id", async (req, res) => {
    try{
        const alienDeleted = await Alien.findByIdAndDelete({_id : req.params.id})
        // res.status(201).send(alienDeleted);
        res.send(alienDeleted);
    }
    catch(e){
        res.send(e);
    }
})


module.exports = router;