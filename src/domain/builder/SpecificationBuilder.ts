import { Specification } from "../entity/Specification";
import { ISpecification } from "../entity/Specification.interface";

class SpecificationBuilder implements ISpecification {
  id: string | undefined;
  name: string;
  description: string | undefined;
  created_at: Date;

  constructor(name: string) {
    this.name = name;
    this.created_at = new Date();
  }

  build() {
    return new Specification(this);
  }

  setName(value: string) {
    this.name = value;
  }

  setDescription(value: string) {
    this.description = value;
  }

  setId(value: string) {
    this.id = value;
  }
}

export { SpecificationBuilder };
