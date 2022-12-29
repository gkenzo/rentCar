import { SpecificationRepositoryInMemory } from "../../../../../infra/repository/SpecificationRepositoryInMemory";
import { DeleteSpecificationUseCase } from "./DeleteSpecificationUseCase";
import { DeleteSpecificationController } from "./DeleteSpecificationController";

const deleteSpecificationUseCase = new DeleteSpecificationUseCase(
  new SpecificationRepositoryInMemory()
);

const deleteSpecificationController = new DeleteSpecificationController(
  deleteSpecificationUseCase
);

export { deleteSpecificationController };
