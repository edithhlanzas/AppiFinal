import { Router } from "express";

import { listarTodosinscripcion } from "../../controllers/Inscripcion/inscripcionController.js";

const inscripcionRouter = Router();

inscripcionRouter.get("/", listarTodosinscripcion);

export default inscripcionRouter;