import express from 'express';
import ProductController from './controllers/productController';
import OrderController from './controllers/orderController';

const app = express();
const productsController = new ProductController();
const orderController = new OrderController();
app.use(express.json());

app.get('/products', productsController.getAll);

app.get('/orders', orderController.getAll);

export default app;
