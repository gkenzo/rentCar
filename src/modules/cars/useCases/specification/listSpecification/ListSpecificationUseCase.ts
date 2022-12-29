import { ISpecificationRepository } from "@/modules/cars/repositories/Specification.interface";

class ListSpecificationUseCase {
  constructor(private categoryRepo: ISpecificationRepository) {}

  handle() {
    const specifications = this.categoryRepo.listAll();
    if (!specifications) throw new Error("Category does not exist");
    return specifications;
  }
}

export { ListSpecificationUseCase };
