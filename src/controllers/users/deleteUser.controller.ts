import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const deletedUser = await deleteUserService(req.params.id);
  return res.status(204).json({});
};
export default deleteUserController;
