const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
// const Alien = require('../models/alien');
const User = require('../models/user');
const Cart = require('../models/addcart');

const bodyParser = require('body-parser');
const user = require('../models/user');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


// user register
router.post('/register', async (req, res) =>{
    const user = new User({
        fname: req.body.fname,
        email: req.body.email,
        password: req.body.password,
    })
    try{
       const a1 = await user.save();
       res.json(a1);
    }catch(err){
        res.send('Error');
    }
});
// user login
router.post('/login', async (req, res) =>{
    let userData = req.body;
    const user = await User.findOne({email : userData.email});
    if(!user){
        res.send("user not found");
    }
    else{
        if(userData.password === user.password){
           
            let token = jwt.sign({email : userData.email}, 'secret',{expiresIn:'3h'});
             res.json(
               token
            )
        //    res.send(data)
        }
        else{
            res.send("incorrent password");
        }
    }
   
});





// Add to cart

router.post('/addcart', async(req,res)=>{
    console.log(req.body._id);
    const cart = new Cart({
        _id: req.body
        // image: req.body.image,
        // p_name: req.body.p_name,
        // quantity: req.body.quantity,
        // price: req.body.price,
        // description: req.body.description,
    })
    try{
       const a1 = await cart.save();
       res.json(a1);
    }catch(err){
        res.send('Error');
    }
})

// get all cart details
router.get('/', async (req,res)=>{
    try{    
        const cart = await Cart.find();
        res.json(cart);
    }catch(err){
        res.send('Error', + err)
    }
})

// Delete items

router.delete("/:id", async (req, res) => {
    try{
        const cartitemDeleted = await Cart.findByIdAndDelete({_id : req.params.id})
        // res.status(201).send(alienDeleted);
        res.send(cartitemDeleted);
    }
    catch(e){
        res.send(e);
    }
})

module.exports = router;