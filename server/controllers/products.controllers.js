const Products = require('../models/products.models');


const getProduct = (req, res) => {
    Products.find(req.body)
    .then((resultado)=>{
        console.log(resultado);
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const getOneProduct = (req, res) => {
    Products.findById(req.params.id)
    .then( (product) => {
        console.log(product);
        res.json(product);
    }).catch( (error) => {
        console.log(`Something went wrong! ${error}`);
    })
}



const createProduct =  (req, res) => {
    Products.create(req.body)
    .then( (resultado) => {
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editProduct = (req, res) => {
    Products.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const deleteProduct = (req, res)=>{
    Products.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    getProduct,
    createProduct,
    editProduct,
    deleteProduct,
    getOneProduct
}

