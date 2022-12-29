import {
  ISpecificationRepository,
  SaveSpecificationDTO,
} from "@/modules/cars/repositories/Specification.interface";

class CreateSpecificationUseCase {
  constructor(private specificationRepo: ISpecificationRepository) {}

  specificationAlreadyExist(specificationName: string) {
    const specificationAlreadyExists =
      this.specificationRepo.findByName(specificationName);
    return specificationAlreadyExists ? true : false;
  }

  handle({ name, description }: SaveSpecificationDTO) {
    if (this.specificationAlreadyExist(name))
      throw new Error("Category already exists");

    return this.specificationRepo.save({ name, description });
  }
}

export { CreateSpecificationUseCase };
