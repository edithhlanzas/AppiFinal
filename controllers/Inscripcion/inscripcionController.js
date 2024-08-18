import {
    listarTodosinscripcionQuery,
 
  } from "../../db/inscripcion/inscripcionQueries.js";
  /**
   * Obtener todos los usuarios de la base de datos
   */
  const listarTodosinscripcion = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const inscripcion = await listarTodosinscripcionQuery();
      res.json(inscripcion);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export {
    listarTodosinscripcion,
  
  };
  