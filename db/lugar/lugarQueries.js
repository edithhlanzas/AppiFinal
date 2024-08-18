import config from '../../config.js';

/**
 * Carga la lista de evento (en este ejemplo solo 10 evento)
 */
const listarTodoslugarQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM lugar', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};
/**
 * Consulta para eliminar un usuario por ID.
 * @param {number} id_usuario - El ID del usuario a eliminar.
 * @returns {Promise} - Una promesa que resuelve con el resultado de la eliminación o rechaza con un error.
 */
const eliminarlugarQuery = (id_lugar) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM lugar WHERE id_lugar = ?';
        config.query(sql, [id_lugar], (err, resultado) => {
            if (err) {
                console.error('Error al eliminar lugar:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};
// Exportar todas las funciones definidas en este archivo
export {
    listarTodoslugarQuery,
    eliminarlugarQuery,
}