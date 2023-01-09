import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const newSchedule: IScheduleRequest = req.body;
  const schedule = await createScheduleService(userId, newSchedule);
  return res.status(201).json(schedule);
};
export default createScheduleController;
