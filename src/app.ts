import express from 'express';
import ProductController from './controllers/productController';
import OrderController from './controllers/orderController';
// começo do projeto
const app = express();
const productsController = new ProductController();
const orderController = new OrderController();
app.use(express.json());
const PORT = 3000;
app.get('/products', productsController.getAll);
app.get('/orders', orderController.getAll);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
export default app;
