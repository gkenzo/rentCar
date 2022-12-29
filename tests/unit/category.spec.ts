import { Category } from "../../src/domain/entity/Category";
import { v4 as uuid } from "uuid";

describe("Testing categories", () => {
  it("should instantiate a new category", () => {
    const categoryInputDTO: Category = {
      created_at: new Date(),
      description: "New category",
      name: "Category 01",
      id: uuid(),
    };
    const category = new Category(categoryInputDTO);

    expect(category).toBeInstanceOf(Category);
  });
});
