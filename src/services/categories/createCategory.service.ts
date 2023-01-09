import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (categoryData: ICategoryRequest) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const createdCategory = categoriesRepository.create(categoryData);
  await categoriesRepository.save(createdCategory);
  return createdCategory;
};
export default createCategoryService;
