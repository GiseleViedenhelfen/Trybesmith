import connection from '../models/connection';
import ProductModel from '../models/productModel';
import Product from '../Interfaces/product';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }
}
export default ProductService;