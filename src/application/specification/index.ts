import { SpecificationService } from "../../domain/services/SpecificationService";
import { SpecificationRepositoryInMemory } from "../../infra/repository/SpecificationRepositoryInMemory";
import { SpecificationController } from "./SpecificationController";

const specificationService = new SpecificationService(
  new SpecificationRepositoryInMemory()
);

const specificationController = new SpecificationController(
  specificationService
);

export { specificationController };
