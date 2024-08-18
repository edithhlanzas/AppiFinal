import {
    listarTodasCategoriaQuery,
 
  } from "../../db/categoria/categoriaQueries.js";
  
  /**
   * Obtener todos los categoria de la base de datos
   */
  const listarTodasCategorias = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const categoria = await listarTodasCategoriaQuery();
      res.json(categoria);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  
  export {
    listarTodasCategorias,
  
  };
  