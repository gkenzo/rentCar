import { ISpecification } from "./Specification.interface";

class Specification implements ISpecification {
  id?: string | undefined;
  name: string;
  description: string | undefined;
  created_at: Date;

  constructor({
    id,
    name,
    description,
    created_at,
  }: {
    id: string | undefined;
    name: string;
    description: string | undefined;
    created_at: Date;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}

export { Specification };
