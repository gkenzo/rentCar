import { CategoryRepositoryInMemory } from "../../../../../infra/repository/CategoryRepositoryInMemory";
import { SearchCategoryUseCase } from "./SearchCategoryUseCase";
import { SearchCategoryController } from "./SearchCategoryController";

const searchCategoryUseCase = new SearchCategoryUseCase(
  new CategoryRepositoryInMemory()
);

const searchCategoryController = new SearchCategoryController(
  searchCategoryUseCase
);

export { searchCategoryController };
