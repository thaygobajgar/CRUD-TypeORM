import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
const ensureIsOwnerOrAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id !== req.params.id) {
    if (!req.user.isAdm) {
      throw new AppError("You're not the owner", 401);
    }
    return next();
  }
  return next();
};

export default ensureIsOwnerOrAdminMiddleware;
