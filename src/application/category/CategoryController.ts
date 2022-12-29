import { CategoryService } from "@/domain/services/CategoryService";
import { Request, Response } from "express";

class CategoryController {
  constructor(private categoryService: CategoryService) {}

  create(req: Request, res: Response) {
    try {
      const category = this.categoryService.create(req.body);
      return res.status(201).send(category).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }

  findAll(req: Request, res: Response) {
    try {
      const category = this.categoryService.findAll();
      res.status(200).send(category).end();
    } catch (error) {
      res.status(204).end();
    }
  }

  findByName(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const category = this.categoryService.findByName({ name });
      res.status(200).send(category).end();
    } catch (error) {
      res.status(204).end();
    }
  }
  remove(req: Request, res: Response) {
    const { name } = req.params;
    try {
      this.categoryService.remove({ name });
      res.status(200).end();
    } catch (err) {
      res.status(404).send({ message: "No Category found with this id" }).end();
    }
  }
}

export { CategoryController };
