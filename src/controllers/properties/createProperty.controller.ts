import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertyService from "../../services/properties/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const newPropertyData: IPropertyRequest = req.body;
  const newProperty = await createPropertyService(newPropertyData);
  return res.status(201).json(newProperty);
};
export default createPropertyController;
