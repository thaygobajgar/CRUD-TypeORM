import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middleware";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensurePropertyNotExistsMiddleware from "../middlewares/ensurePropertyNotExists.middleware";
import { createPropertySerializer } from "../serializers/properties.serializer";

const propertiesRoutes = Router();

propertiesRoutes.get("", listPropertiesController);
propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureDataIsValid(createPropertySerializer),
  ensurePropertyNotExistsMiddleware,
  ensureCategoryExistsMiddleware,
  createPropertyController
);

export default propertiesRoutes;
