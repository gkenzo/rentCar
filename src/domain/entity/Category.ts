import ICategory from "./Category.interface";

export default class Category implements ICategory {
  id?: string;
  name: string;
  description: string;
  readonly created_at: Date;

  constructor({ name, description, created_at, id }: ICategory) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}
