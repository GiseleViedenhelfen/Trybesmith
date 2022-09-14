import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const resp = await this.productService.getAll();
    return res.status(200).json(resp);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const result = await this.productService.create(product);

    return res.status(201).json(result);
  };
}
export default ProductController;