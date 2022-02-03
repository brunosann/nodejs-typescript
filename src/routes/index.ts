import { Router } from "express";

import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/", HomeController.home);

router.get("/contato", InfoController.contact);

router.get("/sobre", InfoController.about);

router.get("/nome", UserController.name);

router.get("/idade", UserController.ageForm);

router.post("/idade", UserController.ageAction);

export default router;
