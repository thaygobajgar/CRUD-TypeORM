import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { schedulesUserToProperties } from "../entities/schedulesUserToProperties.entity";
import { AppError } from "../errors/AppError";
const ensurePropertySchedule = async (
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
      "properties.id = :id AND userToProperties.date = :date AND userToProperties.hour = :hour",
      {
        id: req.body.propertyId,
        date: req.body.date,
        hour: req.body.hour,
      }
    )
    .getOne();

  if (property) {
    throw new AppError(
      "Already have an appointment scheduled to this property at this time",
      409
    );
  }
  return next();
};
export default ensurePropertySchedule;
