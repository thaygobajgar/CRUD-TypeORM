import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";
import { AppError } from "../errors/AppError";

const ensureCategoryExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  if (req.params.id) {
    const categoryId = req.params.id;
    const category = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new AppError("Category not exists", 404);
    }
  }
  if (req.body.categoryId) {
    const categoryId = req.body.categoryId;
    const category = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
      throw new AppError("Category not exists", 404);
    }
  }
  return next();
};
export default ensureCategoryExistsMiddleware;
