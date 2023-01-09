import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";

const listCategoryWithPropertiesService = async (categoryId) =>
  // : Promise<Properties[]>
  {
    const categoriesRepository = AppDataSource.getRepository(Categories);

    const category = await categoriesRepository.findOne({
      where: {
        id: categoryId,
      },
      relations: {
        properties: true,
      },
    });

    return category;
  };
export default listCategoryWithPropertiesService;
