import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureUserIsAvaiableMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const userSchedule = await usersRepository
    .createQueryBuilder("users")
    .innerJoinAndSelect("users.userToProperties", "userToProperties")
    .innerJoinAndSelect("userToProperties.property", "property")
    .where(
      "users.id = :id AND userToProperties.date = :date AND userToProperties.hour = :hour",
      {
        id: req.user.id,
        date: req.body.date,
        hour: req.body.hour,
      }
    )
    .getMany();

  if (userSchedule.length > 0) {
    throw new AppError(
      "You already have an appointment on this time on another property",
      409
    );
  }

  return next();
};

export default ensureUserIsAvaiableMiddleware;
