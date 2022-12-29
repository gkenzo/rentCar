import { Specification } from "../model/Specification";
import { IRepository } from "./Repository.interface";

type SaveSpecificationDTO = {
  name: string;
  description: string;
};

interface ISpecificationRepository extends IRepository {
  save: (saveSpecificationDTO: SaveSpecificationDTO) => Specification;

  findOne: (id: string) => Specification;

  findByName: (name: string) => Specification | undefined;

  listAll: () => Specification[];

  update: ({}: any) => void;

  remove: (id: any) => void;
}

export { SaveSpecificationDTO, ISpecificationRepository };
