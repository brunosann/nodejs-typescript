import { Request, Response } from "express";

export const name = (req: Request, res: Response) => {
  const { name } = req.query;

  res.render("pages/nome", {
    name,
  });
};

export const ageForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const ageAction = (req: Request, res: Response) => {
  const age: string = req.body.age;
  res.render("pages/idade", {
    age,
  });
};
