import express from 'express';
import ProductController from './controllers/productController';
import OrderController from './controllers/orderController';
import UserController from './controllers/userController';

const app = express();
const productsController = new ProductController();
const orderController = new OrderController();
const userController = new UserController();
app.use(express.json());

app.get('/products', productsController.getAll);
app.get('/orders', orderController.getAll);
app.get('/users', userController.getAll);

app.post('/products', productsController.create);
app.post('/users', userController.create);

export default app;
