import { ICategoryRepository } from "src/domain/repository/CategoryRepository.interface";
import { Category } from "src/domain/entity/Category";

type SaveCategoryDTO = {
  name: string;
  description: string;
};

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
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
