import { ISpecificationRepository } from "@/modules/cars/repositories/Specification.interface";

class SearchSpecificationUseCase {
  constructor(private categoryRepo: ISpecificationRepository) {}

  handle({ name }: { name: string }) {
    const category = this.categoryRepo.findByName(name);
    if (!category) throw new Error("Category does not exist");
    return category;
  }
}

export { SearchSpecificationUseCase };
