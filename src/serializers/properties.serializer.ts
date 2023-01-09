import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

const createPropertySerializer: SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required(),
    size: yup.number().required(),
    categoryId: yup.string().required(),
    address: yup.object().shape({
      city: yup.string().required(),
      state: yup.string().max(2).required(),
      district: yup.string().required(),
      zipCode: yup.string().max(8).required(),
      number: yup.string().notRequired(),
    }),
  });

export { createPropertySerializer };
