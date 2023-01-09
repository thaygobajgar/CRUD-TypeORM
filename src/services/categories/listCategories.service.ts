import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listCategoriesService = () => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const categories = categoriesRepository.find();
  return categories;
};

export default listCategoriesService;
