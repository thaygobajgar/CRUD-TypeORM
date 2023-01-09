import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { schedulesUserToProperties } from "../entities/schedulesUserToProperties.entity";
import { AppError } from "../errors/AppError";
const ensureUserScheduleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const property = await propertiesRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.userToProperties", "userToProperties")
    .innerJoinAndSelect("userToProperties.user", "user")
    .where(
      "userToProperties.date = :date AND userToProperties.user = :user AND userToProperties.hour = :hour",
      {
        date: req.body.date,
        user: req.user.id,
        hour: req.body.hour,
      }
    )
    .getOne();

  if (property) {
    throw new AppError(
      "You already have an appointment scheduled at this property",
      409
    );
  }

  return next();
};
export default ensureUserScheduleMiddleware;
