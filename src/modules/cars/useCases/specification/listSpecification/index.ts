import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";

const listSpecificationUseCase = new ListSpecificationUseCase(
  SpecificationRepositoryInMemory.getInstance()
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
