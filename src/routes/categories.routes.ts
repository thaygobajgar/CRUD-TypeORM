import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoryWithPropertiesController from "../controllers/categories/listCategoryWithProperties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists.middleware";
import ensureCategoryNotExistsMiddleware from "../middlewares/ensureCategoryNotExists";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import { createCategorySerializer } from "../serializers/categories.serializer";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/properties",
  ensureCategoryExistsMiddleware,
  listCategoryWithPropertiesController
);
categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureDataIsValid(createCategorySerializer),
  ensureCategoryNotExistsMiddleware,
  createCategoryController
);

export default categoriesRoutes;
