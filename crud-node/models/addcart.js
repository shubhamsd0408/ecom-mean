const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    }
    
    // image:{
    //     type: String,
    //     required:true
    // },
    // p_name:{
    //     type: String,
    //     required:true
    // },
    // quantity:{
    //     type: String,
    //     required:true
    // },
    // price:{
    //     type: String,
    //     required:true
    // },
    // description:{
    //     type: String,
    //     required:true
    // },
   
})

module.exports = mongoose.model('Cart',cartSchema);