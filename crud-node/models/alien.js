const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    
    image:{
        type: String,
        required:true
    },
    p_name:{
        type: String,
        required:true
    },
    quantity:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
   
})

module.exports = mongoose.model('Alien',alienSchema);