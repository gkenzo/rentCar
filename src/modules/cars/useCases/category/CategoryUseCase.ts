import {
  ICategoryRepository,
  SaveCategoryDTO,
} from "../../repositories/CategoryRepository.interface";

class CategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  categoryAlreadyExist(categoryName: string) {
    const categoryAlreadyExists = this.categoryRepo.findByName(categoryName);
    return categoryAlreadyExists ? true : false;
  }

  create({ name, description }: SaveCategoryDTO) {
    if (this.categoryAlreadyExist(name))
      throw new Error("Category already exists");

    return this.categoryRepo.save({ name, description });
  }

  findByName({ name }: { name: string }) {
    const category = this.categoryRepo.findByName(name);
    if (!category) throw new Error("Category does not exist");
    return category;
  }

  findAll() {
    const categories = this.categoryRepo.listAll();
    if (!categories) throw new Error("Category does not exist");
    return categories;
  }

  remove({ name }: { name: string }) {
    this.categoryRepo.remove(name);
  }
}

export { CategoryUseCase };
