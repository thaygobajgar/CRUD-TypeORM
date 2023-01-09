import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const ensureDataIsValid =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // PRECISO CRIAR UM MIDDLEWARE DE ENSUREUPDATEDATA IS VALID
    // const keys = Object.keys(newData);
    // keys.forEach((key) => {
    //   if (key == "isAdm" || key == "isActive" || key == "id") {
    //     throw new AppError(`${key} is a invalid field`, 401);
    //   }
    // });
    try {
      const validatedData = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validatedData;
      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };
export default ensureDataIsValid;
