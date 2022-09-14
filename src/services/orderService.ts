import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import Order from '../Interfaces/orders';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();
    return order;
  }
}
export default OrderService;