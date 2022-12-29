import { Category } from "../model/Category";
import { IRepository } from "./Repository.interface";

type SaveCategoryDTO = {
  name: string;
  description: string;
};

interface ICategoryRepository extends IRepository {
  categories: Category[];
  save: (category: SaveCategoryDTO) => Category;

  findOne: (id: string) => Category;

  findByName: (name: string) => Category | undefined;

  listAll: () => Category[];

  remove: (id: string) => void;
}

export { ICategoryRepository, SaveCategoryDTO };
