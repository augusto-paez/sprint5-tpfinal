import {
    obtenerTodosPaises,
    obtenerPaisPorId,
    buscarPaisesPorNombre,
    filtrarPaisesPorRegion,
    crearPais,
    eliminarPais,
    actualizarPais,
    cargarPaisesDesdeAPI,
    transformarDatosPais
} from '../services/paisesService.mjs';

export async function obtenerTodosPaisesController(req, res) {
    try {
        const paises = await obtenerTodosPaises();
        res.status(200).json(paises);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los países', error: error.message });
    }
}

export async function obtenerPaisPorIdController(req, res) {
    try {
        const { id } = req.params;
        const pais = await obtenerPaisPorId(id);
        if (!pais) {
            return res.status(404).json({ mensaje: 'País no encontrado' });
        }
        res.status(200).json(pais);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el país', error: error.message });
    }
}

export async function buscarPaisesPorNombreController(req, res) {
    try {
        const { nombre } = req.query;
        const paises = await buscarPaisesPorNombre(nombre);
        if (paises.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron países con ese nombre' });
        }
        res.status(200).json(paises);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar países', error: error.message });
    }
}

export async function filtrarPaisesPorRegionController(req, res) {
    try {
        const { region } = req.params;
        const paises = await filtrarPaisesPorRegion(region);
        if (paises.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron países en esa región' });
        }
        res.status(200).json(paises);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al filtrar países', error: error.message });
    }
}

export async function cargarPaisesController(req, res) {
    try {
        const cantidad = await cargarPaisesDesdeAPI();
        res.status(201).json({ mensaje: `${cantidad} países hispanohablantes de América cargados correctamente` });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cargar países', error: error.message });
    }
}

export async function mostrarDashboardController(req, res) {
    try {
        const paises = await obtenerTodosPaises();
        res.render('dashboard', { paises });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cargar el dashboard', error: error.message });
    }
}

export async function eliminarPaisController(req, res) {
    try {
        const { id } = req.params;
        await eliminarPais(id);
        res.status(200).json({ mensaje: 'País eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el país', error: error.message });
    }
}

export async function mostrarFormularioAgregarController(req, res) {
    res.render('addPais', { errores: [], datos: {} });
}

export async function agregarPaisController(req, res) {
    try {
        const data = await transformarDatosPais(req.body);
        await crearPais(data);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar el país', error: error.message });
    }
}

export async function mostrarFormularioEditarController(req, res) {
    try {
        const { id } = req.params;
        const pais = await obtenerPaisPorId(id);
        if (!pais) {
            return res.status(404).json({ mensaje: 'País no encontrado' });
        }
        res.render('editPais', { pais, errores: [] });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el país', error: error.message });
    }
}

export async function editarPaisController(req, res) {
    try {
        const { id } = req.params;
        const data = await transformarDatosPais(req.body);
        await actualizarPais(id, data);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al editar el país', error: error.message });
    }
}

export function mostrarAcercaController(req, res) {
    res.render('acerca');
}