import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../errors/AppError";

const ensureCategoryNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const categoryName = req.body.name;
  const category = await categoriesRepository.findOneBy({ name: categoryName });
  if (category) {
    throw new AppError("Category already exists", 409);
  }
  return next();
};
export default ensureCategoryNotExistsMiddleware;
