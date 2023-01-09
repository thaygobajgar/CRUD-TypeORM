import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { IPropertyRequest, IAddressRequest } from "../../interfaces/properties";

const createPropertyService = async (newPropertyData: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressesRepository = AppDataSource.getRepository(Address);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const newAddress = addressesRepository.create(newPropertyData.address);
  await addressesRepository.save(newAddress);
  const address = await addressesRepository.findOneBy({ id: newAddress.id });
  const category = await categoriesRepository.findOneBy({
    id: newPropertyData.categoryId,
  });

  const newProperty = propertiesRepository.create({
    ...newPropertyData,
    category,
    address,
  });

  await propertiesRepository.save(newProperty);
  return newProperty;
};
export default createPropertyService;
