import ICategoryRepository from "src/domain/repository/CategoryRepository.interface";
import Category from "src/domain/entity/Category";

export default class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[];

  constructor() {
    this.categories = [];
  }

  save(category: Category) {
    this.categories.push(category);
  }

  findOne(id: string) {
    const category = this.categories.find((cat) => cat.id == id);
    if (!category) throw new Error("Category not found on get!");
    return category;
  }

  remove(id: string) {
    const index = this.categories.findIndex((cat) => cat.id == id);
    if (index < 0) throw new Error("Category not found on remove!");
    this.categories.splice(index, 1);
  }
}
