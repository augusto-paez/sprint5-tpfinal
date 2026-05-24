import express from 'express';
import {
    obtenerTodosPaisesController,
    obtenerPaisPorIdController,
    buscarPaisesPorNombreController,
    filtrarPaisesPorRegionController,
    cargarPaisesController,
    mostrarDashboardController,
    eliminarPaisController,
    mostrarFormularioAgregarController,
    agregarPaisController
} from '../controllers/paisesController.mjs';

const router = express.Router();

// Vistas EJS
router.get('/', mostrarDashboardController);
router.get('/paises/agregar', mostrarFormularioAgregarController);
router.post('/paises/agregar', agregarPaisController);

// API JSON
router.post('/paises/cargar', cargarPaisesController);
router.get('/paises', obtenerTodosPaisesController);
router.get('/paises/buscar', buscarPaisesPorNombreController);
router.get('/paises/region/:region', filtrarPaisesPorRegionController);
router.get('/paises/:id', obtenerPaisPorIdController);
router.delete('/paises/:id', eliminarPaisController);

export default router;