import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import createSessionService from "../../services/sessions/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const createSessionData: IUserLogin = req.body;
  const token = await createSessionService(createSessionData);
  return res.status(200).json({ token });
};
export default createSessionController;
