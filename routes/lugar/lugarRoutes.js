import { Router } from "express";

import { 
    listarTodoslugar,
     eliminarlugar

 } from "../../controllers/lugar/lugarController.js";

const lugarRouter = Router();

lugarRouter.get("/", listarTodoslugar);
lugarRouter.delete('/:id', eliminarlugar);//ya podemos eliminar desde el frontend

export default lugarRouter;