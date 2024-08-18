import config from '../../config.js';

/**
 * Carga la lista de eventos
 */
const listarTodosEventosQuery = () => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM evento', (err, filas) => {
            if (err) {
                console.error('Error al listar eventos:', err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un evento por su ID
 */
const listarEventoPorIdQuery = (id_evento) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM evento WHERE id_evento = ? LIMIT 1', [id_evento], (err, filas) => {
            if (err) {
                console.error('Error al listar evento por ID:', err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};

/**
 * Guardar un nuevo evento
 */
const crearEventoQuery = async (evento) => {
    const { Titulo, Descripción, Fecha, Hora } = evento;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO evento (Titulo, Descripción, Fecha, Hora) VALUES (?, ?, ?, ?)';
        config.query(sql, [Titulo, Descripción, Fecha, Hora], (err, resultado) => {
            if (err) {
                console.error('Error al crear evento:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un evento por su ID
 */
const actualizarEventoQuery = (id_evento, evento) => {
    const { Titulo, Descripción, Fecha, Hora } = evento;

    // Asegúrate de que la fecha y la hora están en el formato correcto
    const formattedFecha = new Date(Fecha).toISOString().slice(0, 10); // YYYY-MM-DD
    const formattedHora = Hora ? Hora : null; // Asumimos que Hora ya está en el formato HH:MM:SS

    return new Promise((resolve, reject) => {
        const sql = 'UPDATE evento SET Titulo = ?, Descripción = ?, Fecha = ?, Hora = ? WHERE id_evento = ?';
        config.query(sql, [Titulo, Descripción, formattedFecha, formattedHora, id_evento], (err, resultado) => {
            if (err) {
                console.error("Error al actualizar evento:", err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};


/**
 * Eliminar un evento por su ID
 */
const eliminarEventoQuery = (id_evento) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM evento WHERE id_evento = ?';
        config.query(sql, [id_evento], (err, resultado) => {
            if (err) {
                console.error('Error al eliminar evento:', err);
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

export {
    listarTodosEventosQuery,
    listarEventoPorIdQuery,
    crearEventoQuery,
    actualizarEventoQuery,
    eliminarEventoQuery   
}
