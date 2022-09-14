import express from 'express';
import ProductController from '../controllers/productController';
// começo do projeto
const app = express();
const productsController = new ProductController();
app.use(express.json());
const PORT = 3000;
app.get('/products', productsController.getAll);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
export default app;
