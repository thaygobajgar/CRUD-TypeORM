import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";

const createSessionService = async (userData: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email: userData.email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }
  const passwordVerify = await compare(userData.password, user.password);
  if (!passwordVerify) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign({ isAdm: user.isAdm }, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "24h",
  });

  return token;
};
export default createSessionService;
