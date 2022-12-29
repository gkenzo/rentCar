import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { SearchSpecificationUseCase } from "./SearchSpecificationUseCase";
import { SearchSpecificationController } from "./SearchSpecificationController";

const searchSpecificationUseCase = new SearchSpecificationUseCase(
  new SpecificationRepositoryInMemory()
);

const searchSpecificationController = new SearchSpecificationController(
  searchSpecificationUseCase
);

export { searchSpecificationController };
