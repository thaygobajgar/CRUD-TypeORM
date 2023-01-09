import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { userResponseSerializer } from "../../serializers/user.serializer";

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const createdUser = userRepository.create(userData);

  await userRepository.save(createdUser);
  const userResponse = await userResponseSerializer.validate(createdUser, {
    stripUnknown: true,
  });
  return userResponse;
};

export default createUserService;
