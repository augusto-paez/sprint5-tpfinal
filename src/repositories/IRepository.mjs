class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }
    crear(data) {
        throw new Error("Método 'crear()' no implementado");
    }
    actualizar(id, data) {
        throw new Error("Método 'actualizar()' no implementado");
    }
    borrarPorId(id) {
        throw new Error("Método 'borrarPorId()' no implementado");
    }
    borrarPorNombre(nombre) {
        throw new Error("Método 'borrarPorNombre()' no implementado");
    }
}

export default IRepository;