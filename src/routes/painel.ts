import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home Painel");
});

router.get("/noticias", (req: Request, res: Response) => {
  res.send("Noticias");
});

export default router;
