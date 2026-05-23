import express from 'express';
import {
    obtenerTodosPaisesController,
    obtenerPaisPorIdController,
    buscarPaisesPorNombreController,
    filtrarPaisesPorRegionController,
    cargarPaisesController
} from '../controllers/paisesController.mjs';

const router = express.Router();

router.post('/paises/cargar', cargarPaisesController);
router.get('/paises', obtenerTodosPaisesController);
router.get('/paises/buscar', buscarPaisesPorNombreController);
router.get('/paises/region/:region', filtrarPaisesPorRegionController);
router.get('/paises/:id', obtenerPaisPorIdController);

export default router;