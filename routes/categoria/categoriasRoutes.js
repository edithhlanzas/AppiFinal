import { Router } from "express";

import { listarTodasCategorias } from "../../controllers/categoria/categoriaController.js";

const categoriaRouter = Router();

categoriaRouter.get("/", listarTodasCategorias);

export default categoriaRouter;
