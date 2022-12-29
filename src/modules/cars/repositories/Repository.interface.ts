interface IRepository {
  save: (any: any) => void;

  findOne: (id: any) => void;

  listAll: () => void;

  update: ({}: any) => void;

  remove: (id: any) => void;
}

export { IRepository };
