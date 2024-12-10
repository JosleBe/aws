
import express, { json } from 'express'
import getData from '../Servcio/database.js'
import cors from 'cors'
const port = 3000
const app = express();

app.use(express.json());
app.use(cors())

app.get("/paises", async (req, res) => {
    const data = await getData.getPais();
    return res.send(data);
})

app.get("/estados/:id", async (req, res) => {
    const data = await getData.getEstadosPorPais(req.params.id);
    return res.send(data);
})
app.get("/ciudades/:id", async (req, res) => {
    const data = await getData.getMunicipioPorEstado(req.params.id);
    return res.send(data);
})




app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})