import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const resp = await this.productService.getAll();
    return res.status(200).json(resp);
  };
}
export default ProductController;