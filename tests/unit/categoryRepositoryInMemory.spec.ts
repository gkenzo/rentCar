import { Category } from "../../src/modules/cars/model/Category";
import { CategoryRepositoryInMemory } from "@/infra/repository/CategoryRepositoryInMemory";
import { v4 as uuid } from "uuid";

// describe("Testing Category Repository In Memory", () => {
//   let category: Category;
//   let categoryInputDTO: Category;
//   let categoryRepo: CategoryRepositoryInMemory;

//   beforeEach(() => {
//     categoryInputDTO = {
//       created_at: new Date(),
//       description: "New category",
//       name: "Category 01",
//       id: uuid(),
//     };

//     category = new Category(categoryInputDTO);
//     categoryRepo = new CategoryRepositoryInMemory();
//     categoryRepo.save(category);
//   });
//   it("should be able to instantiate and save a new category", () => {
//     const category01 = categoryRepo.findOne(category.id!);

//     expect(categoryRepo.categories).toHaveLength(1);
//     expect(category01).toBeInstanceOf(Category);
//   });

//   it("should be able to remove a saved category", () => {
//     categoryRepo.remove(category.id!);
//     expect(categoryRepo.categories).toHaveLength(0);
//   });

//   it("should be able to get a category", () => {
//     const cat = categoryRepo.findOne(category.id!);
//     expect(cat).toBeInstanceOf(Category);
//   });
// });
