import { CategoryRepositoryInMemory } from "../../../repositories/implementations/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const createCategoryUseCase = new CreateCategoryUseCase(
  CategoryRepositoryInMemory.getInstance()
);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
