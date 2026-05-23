import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import paisesRoutes from './routes/paisesRoutes.mjs';
import { setServers } from 'node:dns/promises';

setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/', paisesRoutes);

app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});