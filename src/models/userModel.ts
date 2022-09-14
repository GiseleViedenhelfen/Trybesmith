import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../Interfaces/user';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const query = 'SELECT * FROM Trybesmith.Users';
    const result = await this.connection.execute(query);

    const [users] = result;
    return users as User[];
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'insert into Trybesmith.Users (username, classe, level, password) values (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, username, classe, level, password };
  }
}