const mongoose = require('mongoose');

// Schema

const ProductSchema = mongoose.Schema({
    title:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    }
},{timestamps:true});



const Products = mongoose.model('Products', ProductSchema);
module.exports = Products;
