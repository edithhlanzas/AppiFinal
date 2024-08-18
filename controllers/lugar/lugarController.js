import {
    listarTodoslugarQuery,
 
  } from "../../db/lugar/lugarQueries.js";
  
  /**
   * Obtener todos los categoria de la base de datos
   */
  const listarTodoslugar = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const lugar = await listarTodoslugarQuery();
      res.json(lugar);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const eliminarlugar = async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await eliminarlugarQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'lugar eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'lugar no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar lugar', error: error.message });
    }
  };





  
  export {
    listarTodoslugar,
    eliminarlugar,
  
  };
  