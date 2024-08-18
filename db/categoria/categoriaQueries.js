import config from '../../config.js';


const listarTodasCategoriaQuery = () => {
    
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM categoria', (err, filas) => {
           
            if (err) {
                console.log(err);
                reject(err);
            } else {

                resolve(filas);
            }
        });
    });
};




export {
    listarTodasCategoriaQuery,

}
