import { CategoryRepositoryInMemory } from "../../../repositories/implementations/CategoryRepositoryInMemory";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";
import { DeleteCategoryController } from "./DeleteCategoryController";

const deleteCategoryUseCase = new DeleteCategoryUseCase(
  CategoryRepositoryInMemory.getInstance()
);

const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export { deleteCategoryController };
