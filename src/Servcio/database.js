import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql2.createPool(
    {
        host: process.env.LOCAL_HOST,
        user: process.env.LOCAL_HOST_USER,
        password: process.env.LOCAL_HOST_PASSWORD,
        database: process.env.LOCAL_HOST_DATABASE,
        port: process.env.LOCAL_HOST_PORT
    }
).promise();


async function getPais (){
    const [row] = await pool.query('SELECT * FROM PAIS')
    return row
};

async function getEstadosPorPais (id){
    const [row] = await pool.query('SELECT * FROM ESTADO WHERE id_pais = ? ' ,[id])
    return row
};

async function getMunicipioPorEstado (id){
    const [row] = await pool.query('SELECT * FROM MUNICIPIO WHERE id_estado = ?',[id])
    return row
};

const getData = {
    getPais,
    getEstadosPorPais,
    getMunicipioPorEstado
}

export default getData 

