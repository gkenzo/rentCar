import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { DeleteSpecificationUseCase } from "./DeleteSpecificationUseCase";
import { DeleteSpecificationController } from "./DeleteSpecificationController";

const deleteSpecificationUseCase = new DeleteSpecificationUseCase(
  SpecificationRepositoryInMemory.getInstance()
);

const deleteSpecificationController = new DeleteSpecificationController(
  deleteSpecificationUseCase
);

export { deleteSpecificationController };
