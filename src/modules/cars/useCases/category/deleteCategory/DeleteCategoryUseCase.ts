import {
  ICategoryRepository,
  SaveCategoryDTO,
} from "@/modules/cars/repositories/CategoryRepository.interface";

class DeleteCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepository) {}

  handle({ name }: { name: string }) {
    const category = this.categoryRepo.remove(name);
    // if (!category) throw new Error("Category does not exist");
    return category;
  }
}

export { DeleteCategoryUseCase };
