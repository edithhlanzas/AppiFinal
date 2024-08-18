import { Router } from "express";

import { eliminarUsuarios, listarTodosUsuarios } from "../../controllers/usuarios/usuariosController.js";

const usuariosRouter = Router();

usuariosRouter.get("/", listarTodosUsuarios);
usuariosRouter.delete('/:id', eliminarUsuarios);//ya podemos eliminar desde el frontend

export default usuariosRouter;
