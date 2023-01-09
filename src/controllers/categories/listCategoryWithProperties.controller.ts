import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import listCategoryWithPropertiesService from "../../services/categories/listCategoryWithProperties.service";
import createPropertyService from "../../services/properties/createProperty.service";

const listCategoryWithPropertiesController = async (
  req: Request,
  res: Response
) => {
  const categoryId = req.params.id;
  const categories = await listCategoryWithPropertiesService(categoryId);
  return res.json(categories);
};
export default listCategoryWithPropertiesController;
