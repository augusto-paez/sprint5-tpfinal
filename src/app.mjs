import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { connectDB } from './config/dbConfig.mjs';
import paisesRoutes from './routes/paisesRoutes.mjs';
import { setServers } from 'node:dns/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

setServers(["1.1.1.1", "8.8.8.8"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS + layouts
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Archivos estáticos
app.use(express.static(join(__dirname, '../public')));

connectDB();

app.use('/', paisesRoutes);

app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});