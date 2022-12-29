import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";

const listSpecificationUseCase = new ListSpecificationUseCase(
  new SpecificationRepositoryInMemory()
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
