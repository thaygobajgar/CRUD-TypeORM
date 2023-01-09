import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  listUserSerializer,
  userResponseSerializer,
} from "../../serializers/user.serializer";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find({ withDeleted: true });
  const returnedUsers = await listUserSerializer.validate(users, {
    stripUnknown: true,
  });

  return returnedUsers;
};
export default listUsersService;
