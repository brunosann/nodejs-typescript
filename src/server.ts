import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import dotenv from "dotenv";

import indexRoutes from "./routes/index";
import painelRoutes from "./routes/painel";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use("/static", express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(indexRoutes);
server.use("/painel", painelRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("404");
});

server.listen(process.env.PORT, () => {
  console.log("Server is runing... http://localhost:" + process.env.PORT);
});
