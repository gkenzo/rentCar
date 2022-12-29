import { CategoryUseCase } from "./CategoryUseCase";
import { Request, Response } from "express";

class CategoryController {
  constructor(private categoryUseCase: CategoryUseCase) {}

  create(req: Request, res: Response) {
    try {
      const category = this.categoryUseCase.create(req.body);
      return res.status(201).send(category).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }

  findAll(req: Request, res: Response) {
    try {
      const category = this.categoryUseCase.findAll();
      res.status(200).send(category).end();
    } catch (error) {
      res.status(204).end();
    }
  }

  findByName(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const category = this.categoryUseCase.findByName({ name });
      res.status(200).send(category).end();
    } catch (error) {
      res.status(204).end();
    }
  }
  remove(req: Request, res: Response) {
    const { name } = req.params;
    try {
      this.categoryUseCase.remove({ name });
      res.status(200).end();
    } catch (err) {
      res.status(404).send({ message: "No Category found with this id" }).end();
    }
  }
}

export { CategoryController };
