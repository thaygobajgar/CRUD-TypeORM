import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
const ensureIsAValidFieldMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keys = Object.keys(req.body);

  keys.forEach((key) => {
    if (key == "id" || key == "isAdm" || key == "isActive") {
      throw new AppError(
        "Invalid fields, you can only update: email, name or password",
        401
      );
    }
  });

  return next();
};

export default ensureIsAValidFieldMiddleware;
