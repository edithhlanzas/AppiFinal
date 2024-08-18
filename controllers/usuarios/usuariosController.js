import {
    listarTodosUsuariosQuery,
    eliminarUsuariosQuery,
 
  } from "../../db/usuarios/usuariosQueries.js";
  
  /**
   * Obtener todos los usuarios de la base de datos
   */
  const listarTodosUsuarios = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const usuarios = await listarTodosUsuariosQuery();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  const eliminarUsuarios = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarUsuariosQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Usuario eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
  };
  
  export {
    listarTodosUsuarios,
    eliminarUsuarios,
  
  };
  