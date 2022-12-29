import {
  ICategoryRepository,
  SaveCategoryDTO,
} from "@/modules/cars/repositories/CategoryRepository.interface";

class CreateCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  categoryAlreadyExist(categoryName: string) {
    const categoryAlreadyExists = this.categoryRepo.findByName(categoryName);
    return categoryAlreadyExists ? true : false;
  }

  handle({ name, description }: SaveCategoryDTO) {
    if (this.categoryAlreadyExist(name))
      throw new Error("Category already exists");

    return this.categoryRepo.save({ name, description });
  }
}

export { CreateCategoryUseCase };
