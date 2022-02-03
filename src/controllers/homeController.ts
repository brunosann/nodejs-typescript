import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  const products = Product.getAll();
  const expensiveProducts = Product.getFromPriceAfter(5);

  const todo: string[] = ["Alguma coisa a fazer", "Outra a fazer"];

  const data = {
    name: "Bruno",
    age: 25,
    show: true,
    products,
    expensiveProducts,
    todo,
  };

  res.render("pages/home", data);
};
