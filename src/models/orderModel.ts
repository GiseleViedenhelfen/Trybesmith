import { Pool } from 'mysql2/promise';
import Order from '../Interfaces/orders';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = ` SELECT O.id, O.userId, JSON_ARRAYAGG(PI.id) as productsIds 
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as PI
    ON O.id = PI.orderId
    GROUP BY O.id
    ORDER BY O.userId;`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}