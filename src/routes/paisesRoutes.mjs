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
    agregarPaisController,
    mostrarFormularioEditarController,
    editarPaisController
} from '../controllers/paisesController.mjs';
import { paisValidationRules } from '../middlewares/validationRules.mjs';
import { handleValidationErrors } from '../middlewares/errorMiddleware.mjs';

const router = express.Router();

// Vistas EJS
router.get('/', mostrarDashboardController);
router.get('/paises/agregar', mostrarFormularioAgregarController);
router.post('/paises/agregar', paisValidationRules(), handleValidationErrors, agregarPaisController);
router.get('/paises/:id/editar', mostrarFormularioEditarController);
router.post('/paises/:id/editar', paisValidationRules(), handleValidationErrors, editarPaisController);

// API JSON
router.post('/paises/cargar', cargarPaisesController);
router.get('/paises', obtenerTodosPaisesController);
router.get('/paises/buscar', buscarPaisesPorNombreController);
router.get('/paises/region/:region', filtrarPaisesPorRegionController);
router.get('/paises/:id', obtenerPaisPorIdController);
router.delete('/paises/:id', eliminarPaisController);

export default router;