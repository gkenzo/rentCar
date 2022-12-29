import { CategoryRepositoryInMemory } from "../../../../../infra/repository/CategoryRepositoryInMemory";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";
import { DeleteCategoryController } from "./DeleteCategoryController";

const deleteCategoryUseCase = new DeleteCategoryUseCase(
  new CategoryRepositoryInMemory()
);

const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export { deleteCategoryController };
