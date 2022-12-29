import { CategoryRepositoryInMemory } from "../../../../../infra/repository/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const createCategoryUseCase = new CreateCategoryUseCase(
  new CategoryRepositoryInMemory()
);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
