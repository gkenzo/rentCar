import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  execute(req: Request, res: Response) {
    try {
      const categories = this.listCategoryUseCase.handle();
      return res.status(200).send(categories).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { ListCategoryController };
