import { Request, Response, NextFunction } from "express";
import { IUserRequest } from "../../interfaces/users";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const newData: IUserRequest = req.body;
  const userId = req.params.id;
  const userUpdate = await updateUserService(newData, userId);
  return res.json(userUpdate);
};

export default updateUserController;
