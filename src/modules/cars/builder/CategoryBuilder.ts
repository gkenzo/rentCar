import { Category } from "../model/Category";
import { ICategory } from "../model/Category.interface";

class CategoryBuilder implements ICategory {
  id: string | undefined;
  created_at: Date;
  name: string;
  description: string | undefined;

  constructor(name: string) {
    this.name = name;
    this.created_at = new Date();
  }

  build() {
    return new Category(this);
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

export { CategoryBuilder };
