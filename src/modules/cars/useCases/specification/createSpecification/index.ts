import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const createSpecificationUseCase = new CreateSpecificationUseCase(
  SpecificationRepositoryInMemory.getInstance()
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
