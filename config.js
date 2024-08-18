import { createConnection } from 'mysql2';

const config = createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'EstaEslaClave*2024',
    database: 'gestion_de_eventos',
    port: 3307
})

//Validar la conexión a la base de datos
config.connect(function (err) {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conexión exitosa con el id ' + config.threadId);
})


export default config;