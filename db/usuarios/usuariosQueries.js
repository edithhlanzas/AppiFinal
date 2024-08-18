import config from '../../config.js';

/**
 * Consulta para listar todos los usuarios.
 * @returns {Promise} - Una promesa que resuelve con la lista de usuarios o rechaza con un error.
 */
const listarTodosUsuariosQuery = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM usuario', (err, filas) => {
            if (err) {
                console.error('Error al listar usuarios:', err);
                reject(err);
            } else {
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
const eliminarUsuariosQuery = (id_usuario) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM usuario WHERE id_usuario = ?';
        config.query(sql, [id_usuario], (err, resultado) => {
            if (err) {
                console.error('Error al eliminar usuario:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};
// Exportar todas las funciones definidas en este archivo
export {
    listarTodosUsuariosQuery,
    eliminarUsuariosQuery,
}