import { CategoryRepositoryInMemory } from "../../../repositories/implementations/CategoryRepositoryInMemory";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { ListCategoryController } from "./ListCategoryController";

const listCategoryUseCase = new ListCategoryUseCase(
  CategoryRepositoryInMemory.getInstance()
);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
