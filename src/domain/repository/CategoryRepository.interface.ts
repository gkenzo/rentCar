import Category from "../entity/Category";
import IRepository from "./Repository.interface";

export default interface ICategoryRepository extends IRepository {
  categories: Category[];
  save: (category: Category) => void;

  findOne: (id: string) => Category;

  remove: (id: string) => void;
}
