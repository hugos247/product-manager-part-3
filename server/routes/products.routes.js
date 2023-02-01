const ControladorProducts = require('../controllers/products.controllers')

module.exports = (app) => {
    app.get('/api/getproducts', ControladorProducts.getProduct);
    app.get('/api/oneproduct/:id', ControladorProducts.getOneProduct); 
    app.post('/api/createproduct', ControladorProducts.createProduct);
    app.put('/api/editproduct/:id', ControladorProducts.editProduct);
    app.delete('/api/deleteproduct/:id', ControladorProducts.deleteProduct);
}
