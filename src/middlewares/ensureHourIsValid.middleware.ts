import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
const ensureHourIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.hour.split(":")[0] < 8 || req.body.hour.split(":")[0] >= 18) {
    throw new AppError("Invalid time, choose a time between 8am to 6pm", 400);
  }
  return next();
};

export default ensureHourIsValidMiddleware;
