import { ISpecificationRepository } from "@/modules/cars/repositories/Specification.interface";

class DeleteSpecificationUseCase {
  constructor(private specificationRepo: ISpecificationRepository) {}

  handle({ name }: { name: string }) {
    const specification = this.specificationRepo.remove(name);
    // if (!category) throw new Error("Category does not exist");
    return specification;
  }
}

export { DeleteSpecificationUseCase };
