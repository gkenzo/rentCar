import {
  ICategoryRepository,
  SaveCategoryDTO,
} from "@/modules/cars/repositories/CategoryRepository.interface";

class ListCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  handle() {
    const categories = this.categoryRepo.listAll();
    if (!categories) throw new Error("Category does not exist");
    return categories;
  }
}

export { ListCategoryUseCase };
