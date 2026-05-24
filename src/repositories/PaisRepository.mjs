import Pais from '../models/Pais.mjs';
import IRepository from './IRepository.mjs';

class PaisRepository extends IRepository {
    async obtenerTodos() {
        return await Pais.find({ name: { $exists: true } });
    }

    async obtenerPorId(id) {
        return await Pais.findOne({ _id: id, name: { $exists: true } });
    }

    async buscarPorNombre(nombre) {
        return await Pais.find({ name: { $exists: true }, 'name.common': new RegExp(nombre, 'i') });
    }

    async filtrarPorRegion(region) {
        return await Pais.find({ name: { $exists: true }, region: new RegExp(region, 'i') });
    }

    async crear(data) {
        const pais = new Pais(data);
        return await pais.save();
    }

    async actualizar(id, data) {
        return await Pais.findByIdAndUpdate(id, data, { new: true });
    }

    async borrarPorId(id) {
        return await Pais.findByIdAndDelete(id);
    }

    async insertarMuchos(datos) {
        return await Pais.insertMany(datos);
    }
}
export default new PaisRepository();