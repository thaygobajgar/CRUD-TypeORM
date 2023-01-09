import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  if (req.body.email) {
    const user = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
      withDeleted: true,
    });

    if (!user || user.email !== req.body.email) {
      throw new AppError("aqaui", 404);
    }
  }
  return next();
};
export default ensureUserExistsMiddleware;
