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