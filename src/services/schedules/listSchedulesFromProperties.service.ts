import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { schedulesUserToProperties } from "../../entities/schedulesUserToProperties.entity";

const listScheduleFromPropertiesService = async (propertyId: string) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const property = await propertiesRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.userToProperties", "userToProperties")
    .innerJoinAndSelect("userToProperties.user", "user")

    .where("properties.id = :id", { id: propertyId })
    .getMany();

  return { schedules: property[0].userToProperties };
};
export default listScheduleFromPropertiesService;
