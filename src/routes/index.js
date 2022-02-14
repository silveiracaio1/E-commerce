const {Router} = require('express');

const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/LoginController')
const ProductController = require('../controllers/ProductController')

const routes = Router();

routes.get('/', (req,res) => {
    res.send('Server is Running')
})

//Clientes (users)
routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)
routes.patch('/users/:user_id', UserController.updateUser)

//Login
routes.post('/login', LoginController.createSession)

//Produtos
routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUsersProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)
routes.get('/products/:product_id', ProductController.getProductById)
routes.get('/products', ProductController.getProducts)

//Carrinho
routes.post('/cart/:user_id')
routes.get('/cart/:user_id')
routes.get('/cart/:user_id/:cart_id')

module.exports = routes