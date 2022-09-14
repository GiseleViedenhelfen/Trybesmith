import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class ProductController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const resp = await this.orderService.getAll();
    return res.status(200).json(resp);
  };
}
export default ProductController;