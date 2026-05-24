import {
    obtenerTodosPaises,
    obtenerPaisPorId,
    buscarPaisesPorNombre,
    filtrarPaisesPorRegion,
    crearPais
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
        const response = await fetch('https://restcountries.com/v3.1/region/americas');
        const data = await response.json();

        if (!Array.isArray(data)) {
            return res.status(500).json({ mensaje: 'Error al obtener datos de RestCountries', data });
        }

        // Filtrar solo países con español
        const paisesEspanol = data.filter(p =>
            p.languages && p.languages.spa
        );

        // Eliminar propiedades no deseadas y agregar creador
        const paises = paisesEspanol.map(p => {
            const { translations, tld, cca2, ccn3, cca3, cioc, idd, altSpellings, car, coatOfArms, postalCode, demonyms, ...resto } = p;
            return {
                ...resto,
                creador: 'Augusto'
            };
        });

        for (const pais of paises) {
            await crearPais(pais);
        }

        res.status(201).json({ mensaje: `${paises.length} países hispanohablantes de América cargados correctamente` });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cargar países', error: error.message });
    }
}