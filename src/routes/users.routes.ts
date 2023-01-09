import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUserController from "../controllers/users/listUsers.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import updateUserController from "../controllers/users/updatateUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailNotExistsMiddleware from "../middlewares/ensureEmailNotExists.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExistsById.middleware";
import ensureUserIsActiveMiddleware from "../middlewares/ensureUserIsActive.middleware";
import ensureUuidIsValidMiddleware from "../middlewares/ensureUuidIsValid.middleware";
import {
  creasteUserSerializer,
  userUpdateSerializer,
  uuidSerializer,
} from "../serializers/user.serializer";
import ensureIsAValidFieldMiddleware from "../middlewares/ensureIsAValidField.middlware";
import ensureIsOwnerOrAdminMiddleware from "../middlewares/ensureIsOwnerOrAdmin.middleware";
import ensureUserExistsByIdMiddleware from "../middlewares/ensureUserExistsById.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValid(creasteUserSerializer),
  ensureEmailNotExistsMiddleware,
  createUserController
);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerOrAdminMiddleware,
  ensureIsAValidFieldMiddleware,
  ensureUuidIsValidMiddleware(uuidSerializer),
  ensureUserExistsByIdMiddleware,
  ensureDataIsValid(userUpdateSerializer),
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureUuidIsValidMiddleware(uuidSerializer),
  ensureUserExistsByIdMiddleware,
  ensureUserIsActiveMiddleware,
  deleteUserController
);
export default userRoutes;
