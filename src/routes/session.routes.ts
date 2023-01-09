import { Router } from "express";
import createSessionController from "../controllers/sessions/createSession.controller";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExistsById.middleware";
import ensureUserIsActiveMiddleware from "../middlewares/ensureUserIsActive.middleware";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureUserExistsMiddleware,
  ensureUserIsActiveMiddleware,
  createSessionController
);
export default sessionRoutes;
