export default interface IRepository {
  save: (any: any) => void;
  findOne: (id: any) => void;
}
