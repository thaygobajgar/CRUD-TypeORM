import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Address } from "../entities/addresses.entity";
import { Properties } from "../entities/properties.entity";
import { AppError } from "../errors/AppError";
import { IAddressRequest } from "../interfaces/properties";

const ensurePropertyNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const propertiesRepository = AppDataSource.getRepository(Properties);
  // const addressId = req.body.address;
  // const address = await propertiesRepository.findOneBy({ id: addressId });
  const newAddress: IAddressRequest = req.body.address;
  const addressesRepository = AppDataSource.getRepository(Address);
  const addresses = await addressesRepository.findOne({
    where: {
      district: newAddress.district,
      city: newAddress.city,
      zipCode: newAddress.zipCode,
      number: newAddress.number,
      state: newAddress.state,
    },
  });

  if (addresses) {
    throw new AppError("Property already exists", 409);
  }
  return next();
};
export default ensurePropertyNotExistsMiddleware;
