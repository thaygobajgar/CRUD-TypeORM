import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import listSchedulesFromPropertiesController from "../controllers/schedules/listSchedulesFromProperties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDateFormatMiddleware from "../middlewares/ensureDateFormat.middleware";
import ensureHourIsValidMiddleware from "../middlewares/ensureHourIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensurePropertyExistsMiddleware from "../middlewares/ensurePropertyExists.middleware";
import ensurePropertySchedule from "../middlewares/ensurePropertySchedule.middleware";
import ensureUserIsAvaiableMiddleware from "../middlewares/ensureUserIsAvaiable.middleware";
import ensureUserScheduleMiddleware from "../middlewares/ensureUserSchedule.middleware";

const schedulesRoutes = Router();
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensurePropertyExistsMiddleware,
  listSchedulesFromPropertiesController
);
schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDateFormatMiddleware,
  ensurePropertySchedule,
  ensureUserIsAvaiableMiddleware,
  ensureHourIsValidMiddleware,
  ensurePropertyExistsMiddleware,
  ensureUserScheduleMiddleware,
  createScheduleController
);

export default schedulesRoutes;

[
  {
    date: "2022-08-12T00:00:00.000Z",
    hour: "10:30",
    id: "030a2190-193b-4cd7-920b-86525809c736",
    user: {
      createdAt: "2023-01-06T18:17:53.000Z",
      deletedAt: null,
      email: "joana@mail.com",
      id: "6f09dd15-e016-425b-8a8a-b5f22fd9f44b",
      isActive: true,
      isAdm: false,
      name: "Joana",
      password: "$2a$10$lrVFKh/kB4FXsu3x84eXTOcyN61x5KpbFiHFZYz.rSCMM4iHmW.hC",
      updatedAt: "2023-01-06T18:17:53.000Z",
    },
  },
  {
    date: "2022-08-20T00:00:00.000Z",
    hour: "10:30",
    id: "79a4b6bb-7874-4720-a9f8-6da74db8bc39",
    user: {
      createdAt: "2023-01-06T18:17:53.000Z",
      deletedAt: null,
      email: "joana@mail.com",
      id: "6f09dd15-e016-425b-8a8a-b5f22fd9f44b",
      isActive: true,
      isAdm: false,
      name: "Joana",
      password: "$2a$10$lrVFKh/kB4FXsu3x84eXTOcyN61x5KpbFiHFZYz.rSCMM4iHmW.hC",
      updatedAt: "2023-01-06T18:17:53.000Z",
    },
  },
];
