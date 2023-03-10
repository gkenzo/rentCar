import { ICategoryRepository } from "../CategoryRepository.interface";
import { Category } from "../../model/Category";

type SaveCategoryDTO = {
  name: string;
  description: string;
};

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[];
  private static INSTANCE: CategoryRepositoryInMemory;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): CategoryRepositoryInMemory {
    if (!CategoryRepositoryInMemory.INSTANCE)
      CategoryRepositoryInMemory.INSTANCE = new CategoryRepositoryInMemory();

    return CategoryRepositoryInMemory.INSTANCE;
  }

  save({ name, description }: SaveCategoryDTO) {
    const category = { name, description, created_at: new Date() };
    this.categories.push(category);
    return category;
  }

  findOne(id: string) {
    const category = this.categories.find((cat) => cat.id == id);
    if (!category) throw new Error("Category not found on get!");
    return category;
  }

  listAll() {
    return this.categories;
  }

  remove(name: string) {
    const index = this.categories.findIndex((cat) => cat.name == name);
    if (index < 0) throw new Error("Category not found on remove!");
    this.categories.splice(index, 1);
  }

  findByName(name: string) {
    const category = this.categories.find((category) => category.name == name);
    return category;
  }

  update({ name }: { name: string }) {}
}
export { CategoryRepositoryInMemory };
