import { Pool } from 'mysql2/promise';
import Order from '../Interfaces/orders';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = ` select O.id, O.userId, JSON_ARRAYAGG(PI.id) as productsIds 
    from Trybesmith.Orders as O
    inner join Trybesmith.Products as PI
    ON O.id = PI.orderId
    group by O.id
    order by O.userId;`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}