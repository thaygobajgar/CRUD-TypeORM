import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse, IUserUpdate } from "../../interfaces/users";
import { userResponseSerializer } from "../../serializers/user.serializer";

const updateUserService = async (
  newData: IUserUpdate,
  userId: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find({
    where: {
      id: userId,
    },
    withDeleted: true,
  });

  const updatedData = userRepository.create({
    ...user[0],
    ...newData,
  });

  await userRepository.save(updatedData);

  const updatedDataResponse = await userResponseSerializer.validate(
    updatedData,
    {
      stripUnknown: true,
    }
  );

  return updatedDataResponse;
};
export default updateUserService;
