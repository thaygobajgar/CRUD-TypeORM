import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureEmailNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const email = await userRepository.findOneBy({ email: req.body.email });

  if (email) {
    throw new AppError("Email already in use", 409);
  }

  return next();
};
export default ensureEmailNotExistsMiddleware;
