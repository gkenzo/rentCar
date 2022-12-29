import {
  ISpecificationRepository,
  SaveSpecificationDTO,
} from "../repository/Specification.interface";

class SpecificationService {
  constructor(private specificationRepo: ISpecificationRepository) {}

  specificationAlreadyExist(categoryName: string) {
    const categoryAlreadyExists =
      this.specificationRepo.findByName(categoryName);
    return categoryAlreadyExists ? true : false;
  }

  create({ name, description }: SaveSpecificationDTO) {
    if (this.specificationAlreadyExist(name))
      throw new Error("Category already exists");

    return this.specificationRepo.save({ name, description });
  }

  findByName({ name }: { name: string }) {
    const category = this.specificationRepo.findByName(name);
    if (!category) throw new Error("Category does not exist");
    return category;
  }

  findAll() {
    const categories = this.specificationRepo.listAll();
    if (!categories) throw new Error("Category does not exist");
    return categories;
  }

  remove({ name }: { name: string }) {
    this.specificationRepo.remove(name);
  }
}

export { SpecificationService };
