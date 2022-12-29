import { ICategory } from "./Category.interface";

class Category implements ICategory {
  id?: string | undefined;
  name: string;
  description: string | undefined;
  readonly created_at: Date;

  constructor({ name, description, created_at, id }: ICategory) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Category };
