import {
  ISpecificationRepository,
  SaveSpecificationDTO,
} from "../Specification.interface";
import { Specification } from "../../model/Specification";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[];

  private static INSTANCE: SpecificationRepositoryInMemory;

  private constructor() {
    this.specifications = [];
  }

  static getInstance(): SpecificationRepositoryInMemory {
    if (!SpecificationRepositoryInMemory.INSTANCE) {
      SpecificationRepositoryInMemory.INSTANCE =
        new SpecificationRepositoryInMemory();
    }

    return SpecificationRepositoryInMemory.INSTANCE;
  }

  save({ name, description }: SaveSpecificationDTO) {
    const specification = { name, description, created_at: new Date() };
    this.specifications.push(specification);
    return specification;
  }

  findOne(id: string) {
    const specification = this.specifications.find((cat) => cat.id == id);
    if (!specification) throw new Error("Specification not found on get!");
    return specification;
  }

  listAll() {
    return this.specifications;
  }

  remove(name: string) {
    const index = this.specifications.findIndex((cat) => cat.name == name);
    if (index < 0) throw new Error("Specification not found on remove!");
    this.specifications.splice(index, 1);
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name == name
    );
    return specification;
  }

  update({ name }: { name: string }) {}
}

export { SpecificationRepositoryInMemory };
