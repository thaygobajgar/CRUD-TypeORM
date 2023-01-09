import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
const ensureUserExistsByIdMiddleware = async (
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

    if (!user || user.id !== req.params.id) {
      throw new AppError("User not found", 404);
    }
  }

  return next();
};
export default ensureUserExistsByIdMiddleware;
