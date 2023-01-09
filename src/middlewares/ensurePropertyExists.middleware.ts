import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { AppError } from "../errors/AppError";

const ensurePropertyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  if (req.body.propertyId) {
    const propertyId = req.body.propertyId;
    const property = await propertiesRepository.findOne({
      where: { id: propertyId },
    });

    if (!property || propertyId !== property.id) {
      throw new AppError("Property not found", 404);
    }
  }

  if (req.params.id) {
    const propertyId = req.params.id;
    const property = await propertiesRepository.findOne({
      where: { id: propertyId },
    });

    if (!property) {
      throw new AppError("Property not found", 404);
    }
  }

  return next();
};
export default ensurePropertyExistsMiddleware;
