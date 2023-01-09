import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
  IUuid,
} from "../interfaces/users";

const creasteUserSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  updatedAt: yup.date(),
  createdAt: yup.date(),
  isActive: yup.boolean(),
  isAdm: yup.boolean(),
  email: yup.string(),
  name: yup.string(),
  id: yup.string(),
});
const listUserSerializer: SchemaOf<IUserResponse[]> = yup.array(
  userResponseSerializer
);

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

const uuidSerializer: SchemaOf<IUuid> = yup.object().shape({
  id: yup
    .string()
    .matches(
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    ),
});

export {
  creasteUserSerializer,
  userResponseSerializer,
  userUpdateSerializer,
  uuidSerializer,
  listUserSerializer,
};
