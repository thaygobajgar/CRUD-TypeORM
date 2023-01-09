import { Request, Response, NextFunction } from "express";
import listUsersService from "../../services/users/listUsers.service";
const listUserController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(users);
};
export default listUserController;
