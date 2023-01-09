import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

const ensureUuidIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedUuid = await schema.validate(
        { id: req.params.id },
        {
          stripUnknown: true,
        }
      );
      return next();
    } catch (error) {
      return res.status(404).json({ message: error.errors });
    }
  };
export default ensureUuidIsValidMiddleware;
