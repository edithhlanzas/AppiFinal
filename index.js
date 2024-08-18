//Crear la instancia de express
import express from 'express';
import cors from 'cors'

// Importar las rutas
import usuariosRouter from './routes/usuarios/usuariosRoutes.js';
import eventosRouter from './routes/eventos/eventosRoutes.js';  
import categoriaRouter from './routes/categoria/categoriasRoutes.js';
import lugarRouter from './routes/lugar/lugarRoutes.js';
import inscripcionRouter from './routes/inscripcion/inscripcionRoutes.js';

//Crear la app de express
const app = express();

//Habilitar la captura de datos mediante post / formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para permitir las llamadas de otro servidor
// distinto a este (localhost:3000).
app.use(cors())

//Configurar el puerto
const port = 3000;

//Usar las rutas
app.use('/eventos', eventosRouter); 
app.use('/usuarios', usuariosRouter); // PRODUCTOS
app.use('/categorias', categoriaRouter);
app.use('/lugar', lugarRouter);
app.use('/inscripciones', inscripcionRouter);
//Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
