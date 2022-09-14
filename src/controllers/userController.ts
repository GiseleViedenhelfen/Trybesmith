import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService';

const JWT_SECRET = 'secretPassword';

class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.userService.getAll();
    return res.status(200).json(users);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;
    await this.userService.create(user);
    const token = jwt.sign({ user }, JWT_SECRET);

    return res.status(201).json({ token });
  };
}
export default UserController;