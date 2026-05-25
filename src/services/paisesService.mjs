import paisRepository from '../repositories/PaisRepository.mjs';

export async function obtenerTodosPaises() {
    return await paisRepository.obtenerTodos();
}

export async function obtenerPaisPorId(id) {
    return await paisRepository.obtenerPorId(id);
}

export async function buscarPaisesPorNombre(nombre) {
    return await paisRepository.buscarPorNombre(nombre);
}

export async function filtrarPaisesPorRegion(region) {
    return await paisRepository.filtrarPorRegion(region);
}

export async function crearPais(data) {
    return await paisRepository.crear(data);
}

export async function eliminarPais(id) {
    return await paisRepository.borrarPorId(id);
}

export async function actualizarPais(id, data) {
    return await paisRepository.actualizar(id, data);
}

export async function cargarPaisesDesdeAPI() {
    const response = await fetch('https://restcountries.com/v3.1/region/americas');
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error('La API no devolvió un array válido');
    }

    const paisesEspanol = data.filter(p => p.languages && p.languages.spa);

    const paises = paisesEspanol.map(p => {
        const { translations, tld, cca2, ccn3, cca3, cioc, idd, altSpellings, car, coatOfArms, postalCode, demonyms, ...resto } = p;
        return { ...resto, creador: 'Augusto' };
    });

    await paisRepository.insertarMuchos(paises);
    return paises.length;
}

export async function transformarDatosPais(body) {
    const { nombreOficial, capital, borders, area, population, timezones, creador, gini } = body;
    
    const data = {
        name: { official: nombreOficial, common: nombreOficial },
        capital: [capital],
        borders: borders ? borders.split(',').map(b => b.trim().toUpperCase()) : [],
        area: Number(area),
        population: Number(population),
        timezones: [timezones],
        region: 'Americas',
        creador
    };

    if (gini) {
        const anio = new Date().getFullYear();
        data.gini = { [anio]: Number(gini) };
    }

    return data;
}