import { CategoryRepositoryInMemory } from "../../../repositories/implementations/CategoryRepositoryInMemory";
import { SearchCategoryUseCase } from "./SearchCategoryUseCase";
import { SearchCategoryController } from "./SearchCategoryController";

const searchCategoryUseCase = new SearchCategoryUseCase(
  CategoryRepositoryInMemory.getInstance()
);

const searchCategoryController = new SearchCategoryController(
  searchCategoryUseCase
);

export { searchCategoryController };
