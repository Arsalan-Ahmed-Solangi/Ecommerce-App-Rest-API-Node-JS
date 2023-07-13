const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },    
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    size:{
        type:String,
        default:""
    },
    color:{
        type:String,
        default:""
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }

},{timestamps:true});

module.exports =  mongoose.model("Product",productSchema);