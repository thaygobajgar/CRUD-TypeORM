import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const newCategoryData: ICategoryRequest = req.body;
  const newCategory = await createCategoryService(newCategoryData);
  return res.status(201).json(newCategory);
};
export default createCategoryController;
