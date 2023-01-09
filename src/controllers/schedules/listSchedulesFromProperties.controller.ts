import { Request, Response } from "express";
import listScheduleFromPropertiesService from "../../services/schedules/listSchedulesFromProperties.service";

const listSchedulesFromPropertiesController = async (
  req: Request,
  res: Response
) => {
  const propertyId = req.params.id;
  const schedules = await listScheduleFromPropertiesService(propertyId);
  return res.status(200).json(schedules);
};
export default listSchedulesFromPropertiesController;
