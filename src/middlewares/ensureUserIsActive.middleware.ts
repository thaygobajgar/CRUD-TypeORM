import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureUserIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  if (req.params.id) {
    const user = await userRepository.findOne({
      where: {
        id: req.params.id,
      },
      withDeleted: true,
    });
    if (!user.isActive) {
      throw new AppError("User inactive", 400);
    }
    return next();
  }
  if (req.body.email) {
    const user = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
      withDeleted: true,
    });
    if (!user.isActive) {
      throw new AppError("User inactive", 400);
    }
    return next();
  }
};
export default ensureUserIsActiveMiddleware;
