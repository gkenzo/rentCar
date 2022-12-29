import { CategoryService } from "./CategoryUseCase";
import { CategoryRepositoryInMemory } from "../../../../infra/repository/CategoryRepositoryInMemory";
import { CategoryController } from "./CategoryController";

const categoryService = new CategoryService(new CategoryRepositoryInMemory());

const categoryController = new CategoryController(categoryService);

export { categoryController };
