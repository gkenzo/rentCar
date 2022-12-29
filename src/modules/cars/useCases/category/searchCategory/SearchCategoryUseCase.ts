import {
  ICategoryRepository,
  SaveCategoryDTO,
} from "@/modules/cars/repositories/CategoryRepository.interface";

class SearchCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  handle({ name }: { name: string }) {
    const category = this.categoryRepo.findByName(name);
    if (!category) throw new Error("Category does not exist");
    return category;
  }
}

export { SearchCategoryUseCase };
