import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../Interfaces/product';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const result = await this.connection.execute('select * from Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'insert into Trybesmith.Products (name, amount) values (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}