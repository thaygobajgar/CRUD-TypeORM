import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { schedulesUserToProperties } from "../../entities/schedulesUserToProperties.entity";
import { User } from "../../entities/user.entity";

const createScheduleService = async (userId: string, newSchedule) => {
  newSchedule.userId = userId;
  const schedulesRepository = AppDataSource.getRepository(
    schedulesUserToProperties
  );
  const userRepository = AppDataSource.getRepository(User);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const user = await userRepository.findOneBy({
    id: userId,
  });
  const property = await propertiesRepository.findOneBy({
    id: newSchedule.propertyId,
  });

  await schedulesRepository.save({
    user,
    property,
    date: newSchedule.date,
    hour: newSchedule.hour,
  });

  return { message: "Schedule created" };
};
export default createScheduleService;
