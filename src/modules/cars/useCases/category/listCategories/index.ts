import { CategoryRepositoryInMemory } from "../../../../../infra/repository/CategoryRepositoryInMemory";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";

const listCategoryUseCase = new ListCategoryUseCase(
  new CategoryRepositoryInMemory()
);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
